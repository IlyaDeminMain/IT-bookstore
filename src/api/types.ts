import {AxiosRequestConfig, AxiosResponse} from 'axios';


export interface ApiError {
    message?: string;
    code?: string;
    status?: number;
}

export interface ReflectType { rejectValue: ApiError }

export interface ApiClient {
    get<T = any>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>>;
}
