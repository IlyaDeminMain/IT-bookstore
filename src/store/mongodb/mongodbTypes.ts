
export interface Books {
    image: string
    isbn13: string
    price: string
    subtitle: string
    title: string
    url: string
}

export interface MongodbTypes {
    books: Books[]
    error: string
    page: string
    total: string
}



export interface FetchBooksParams {
    timeout: number
}
