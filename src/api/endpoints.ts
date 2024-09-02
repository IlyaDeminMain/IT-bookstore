export const API_ROUTES = {
    BASE_URL: "https://api.itbook.store/1.0",
    MONGO_DB: 'https://api.itbook.store/1.0/search/mongodb',
    NEW: "https://api.itbook.store/1.0/new",
    GET_BY_ID: (id: string) => `https://api.itbook.store/1.0/books/${id}`,
} as const;
