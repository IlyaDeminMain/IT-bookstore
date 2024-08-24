import axios, {AxiosInstance, AxiosRequestConfig, AxiosResponse} from 'axios';
import {ApiClient, ApiError} from './types';
import {API_ROUTES} from "src/api/endpoints";


class AxiosApiClient implements ApiClient {
    private axiosInstance: AxiosInstance;

    constructor(config?: AxiosRequestConfig) {
        this.axiosInstance = axios.create({
            baseURL: API_ROUTES.BASE_URL,
            timeout: 5000,
            headers: {
                'Content-Type': 'application/json',
            },
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
                message: error.message || 'An error occurred with the API',
                code: error.code,
                status: error.status || 404,
            };
        }
        return { message: 'An unexpected error occurred' };
    }

    get<T = any>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
        return this.axiosInstance.get(url, config);
    }
}

export const apiClient = new AxiosApiClient();
