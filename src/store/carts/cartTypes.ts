


export interface CartType {
    authors: string
    desc: string
    error: string
    image: string
    isbn10: string
    isbn13: string
    language: string
    pages: string
    pdf: {
        "Chapter 2": string
        "Chapter 5": string
    }
    price: string
    publisher: string
    rating: string
    subtitle: string
    title: string
    url: string
    year: string
}




export interface FetchBooksParams {
    id: string
}