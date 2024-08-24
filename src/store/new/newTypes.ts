import {FetchBooksParams} from "src/store/books/booksTypes";

export interface NewTypes {
    image: string
    isbn13: string
    price: string
    subtitle: string
    title: string
    url: string
}


export interface FetchNewParams extends  FetchBooksParams {}