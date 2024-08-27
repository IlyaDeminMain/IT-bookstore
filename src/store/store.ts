import { configureStore } from '@reduxjs/toolkit'
import mongodbSlice from "src/store/mongodb/mongodbSlice";
import newSlice from "src/store/new/newSlice";

export const store = configureStore({
    reducer: {
        mongodb: mongodbSlice,
        newBooks: newSlice
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch