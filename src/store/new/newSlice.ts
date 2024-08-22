import { createSlice } from '@reduxjs/toolkit'
import categoriesThunks from "src/store/books/booksThunks";


interface SomeFeatureState {
    books: string[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null | any;
}

const initialState: SomeFeatureState = {
    books: [],
    status: 'idle',
    error: null,
};

export const booksSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(categoriesThunks.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(categoriesThunks.fulfilled, (state) => {
                state.status = 'succeeded';
            })
            .addCase(categoriesThunks.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload ?? 'Unknown error occurred';
            })
    },
})

export const actions = booksSlice.actions
export const reducer = booksSlice.reducer

export default booksSlice.reducer