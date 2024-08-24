import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {axiosBooks} from "src/store/books/booksThunks";
import {NewTypes} from "src/store/new/newTypes";


interface NewState {
    items: any[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null | any;
}

const initialState: NewState = {
    items: [],
    status: 'idle',
    error: null,
};

export const NewSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(axiosBooks.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(axiosBooks.fulfilled, (state, action: PayloadAction<NewTypes[]>) => {
                state.status = 'succeeded';
                state.items = action.payload;
                state.error = null;
            })
            .addCase(axiosBooks.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload ?? { message: 'Unknown error occurred' };
            })
    },
})


export default NewSlice.reducer