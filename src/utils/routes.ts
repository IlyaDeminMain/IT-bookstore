
const ROUTES = {
    HOME: "/",
    CART: "/cart",
    HELP: "/help",
    NEW: "/new",
    MONGODB: "/mongodb",
} as const;

type ObjectValues<T> = T[keyof T]

type routes_address = ObjectValues<typeof ROUTES>

export {
    ROUTES,
    ObjectValues,
    routes_address
}


