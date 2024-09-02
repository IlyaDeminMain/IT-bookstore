import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ApiError} from "src/api/types";
import {CartType} from "src/store/carts/cartTypes";
import {getCart} from "src/store/carts/cartThunk";



export interface CartState {
    item: CartType | null;
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: ApiError | null;
}

const initialState: CartState = {
    item: null,
    status: 'idle',
    error: null,
};

const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getCart.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getCart.fulfilled, (state, action: PayloadAction<CartType>) => {
                state.status = 'succeeded';
                state.item = action.payload;
                state.error = null;
            })
            .addCase(getCart.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload ?? { message: 'Unknown error occurred' };
            })
    },
});

export default CartSlice.reducer