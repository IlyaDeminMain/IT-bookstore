import {ApiError} from "src/api/types";

export interface BooksTypes {
    image: string
    isbn13: string
    price: string
    subtitle: string
    title: string
    url: string
}[]

export interface FetchBooksParams {
    baseUrl?: string
    url?: string
    limit?: number;
}
export interface ReflectBooksType { rejectValue: ApiError }