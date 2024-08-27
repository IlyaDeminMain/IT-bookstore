import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {getNew} from "src/store/new/newThunk";
import {NewTypes} from "src/store/new/newTypes";
import {MongodbState} from "src/store/mongodb/mongodbSlice";


interface NewState extends MongodbState {}

const books = {
    books: [],
    error: '',
    page: '',
    total: '',
}

const initialState: NewState = {
    items: books,
    status: 'idle',
    error: null,
};

export const NewSlice = createSlice({
    name: 'new',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getNew.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getNew.fulfilled, (state, action: PayloadAction<NewTypes>) => {
                state.status = 'succeeded';
                state.items = action.payload;
                state.error = null;
            })
            .addCase(getNew.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload ?? { message: 'Unknown error occurred' };
            })
    },
})


export default NewSlice.reducer