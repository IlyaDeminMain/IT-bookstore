import axios, { AxiosInstance } from 'axios';
import {ApiClient, ApiError, ApiRequestConfig, ApiResponse} from './types';
import {API_ROUTES} from "src/api/endpoints";

class AxiosApiClient implements ApiClient {
    private axiosInstance: AxiosInstance;

    constructor(config?: ApiRequestConfig) {
        this.axiosInstance = axios.create({
            baseURL: API_ROUTES.NEW,
            timeout: 5000,
            ...config,
        });

        this.axiosInstance.interceptors.response.use(
            (response) => response,
            (error) => Promise.reject(this.handleError(error))
        );
    }

    private handleError(error: any): ApiError {
        if (axios.isAxiosError(error)) {
            return {
                message: error.response?.data?.message || 'An error occurred with the API',
                code: error.response?.data?.code,
                status: error.response?.status,
            };
        }
        return { message: 'An unexpected error occurred' };
    }

    get<T = any>(url: string, config?: ApiRequestConfig): Promise<ApiResponse<T>> {
        return this.axiosInstance.get(url, config);
    }
}

export const apiClient = new AxiosApiClient();
