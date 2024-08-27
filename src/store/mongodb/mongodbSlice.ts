import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {getMongodb} from "src/store/mongodb/mongodbThunks";
import { ApiError } from 'src/api/types';
import {MongodbTypes} from "src/store/mongodb/mongodbTypes";

export interface MongodbState {
    items: MongodbTypes;
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: ApiError | null;
}

const books = {
    books: [],
    error: '',
    page: '',
    total: '',
}

const initialState: MongodbState = {
    items: books,
    status: 'idle',
    error: null,
};

const MongodbSlice = createSlice({
    name: 'mongodb',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getMongodb.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getMongodb.fulfilled, (state, action: PayloadAction<MongodbTypes>) => {
                state.status = 'succeeded';
                state.items = action.payload;
                state.error = null;
            })
            .addCase(getMongodb.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload ?? { message: 'Unknown error occurred' };
            })
    },
});

export default MongodbSlice.reducer;
