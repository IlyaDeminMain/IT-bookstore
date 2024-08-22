import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { axiosBooks } from "src/store/books/booksThunks";
import { ApiError } from 'src/api/types';
import {BooksTypes} from "src/store/books/booksTypes";

interface BooksState {
    items: BooksTypes[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: ApiError | null;
}

const initialState: BooksState = {
    items: [],
    status: 'idle',
    error: null,
};

const BooksSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(axiosBooks.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(axiosBooks.fulfilled, (state, action: PayloadAction<BooksTypes[]>) => {
                state.status = 'succeeded';
                state.items = action.payload;
                state.error = null;
            })
            .addCase(axiosBooks.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload ?? { message: 'Unknown error occurred' };
            })
    },
});

export default BooksSlice.reducer;
