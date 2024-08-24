import { configureStore } from '@reduxjs/toolkit'
import booksSlice from "src/store/books/booksSlice";
import newSlice from "src/store/new/newSlice";

export const store = configureStore({
    reducer: {
        books: booksSlice,
        new: newSlice
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch