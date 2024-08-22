import { AxiosResponse, AxiosRequestConfig } from 'axios';

export interface ApiResponse<T = any> extends AxiosResponse<T> {}

export interface ApiError {
    message: string;
    code?: string;
    status?: number;
}

export interface ApiRequestConfig extends AxiosRequestConfig {}

export type ApiMethod = 'get' | 'post' | 'put' | 'delete' | 'patch';

export interface ApiClient {
    get<T = any>(url: string, config?: ApiRequestConfig): Promise<ApiResponse<T>>;
}
