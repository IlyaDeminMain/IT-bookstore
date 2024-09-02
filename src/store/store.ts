import { configureStore } from '@reduxjs/toolkit'
import mongodbSlice from "src/store/mongodb/mongodbSlice";
import newSlice from "src/store/new/newSlice";
import cartSlice from "src/store/carts/cartSlice";

export const store = configureStore({
    reducer: {
        mongodb: mongodbSlice,
        newBooks: newSlice,
        cart: cartSlice
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch