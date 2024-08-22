
const ROUTES = {
    HOME: "/",
    CART: "/cart",
    CATEGORY: "/books/:categoryId",
    HELP: "/help",
} as const;

type ObjectValues<T> = T[keyof T]

type routes_address = ObjectValues<typeof ROUTES>

export {
    ROUTES,
    ObjectValues,
    routes_address
}



// fetch('https://api.itbook.store/1.0/books/9781801812856')
//     .then(res=>res.json())
//     .then(json=>console.log(json))

// fetch('https://api.itbook.store/1.0/search/mongodb')
//     .then(res=>res.json())
//     .then(json=>console.log(json))

// fetch('https://api.itbook.store/1.0/new')
//     .then(res=>res.json())
//     .then(json=>console.log(json))



