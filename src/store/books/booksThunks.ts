import { createAsyncThunk } from '@reduxjs/toolkit';
import { apiClient} from "src/api/apiClient";
import { ApiError} from "src/api/types";
import {BooksTypes, FetchBooksParams} from "src/store/books/booksTypes";
import {ReflectType} from "src/api/types";
import {API_ROUTES} from "src/api/endpoints";


export const axiosBooks = createAsyncThunk<
    BooksTypes[],
    FetchBooksParams,
    ReflectType
>(
    'someFeature/fetchSomeFeature',
    async (params, { rejectWithValue }) => {
        try {
            const response = await apiClient.get<BooksTypes[]>(API_ROUTES.MONGO_DB, params);
            return response.data;
        } catch (error) {
            return rejectWithValue(error as ApiError);
        }
    }
);



