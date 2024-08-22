import { createAsyncThunk } from '@reduxjs/toolkit';
import { apiClient} from "src/api/apiClient";
import { ApiError} from "src/api/types";
import {BooksTypes, FetchBooksParams, ReflectBooksType} from "src/store/books/booksTypes";
import {API_ROUTES} from "src/api/endpoints";

export const axiosBooks = createAsyncThunk<
    BooksTypes[],
    FetchBooksParams,
    ReflectBooksType
>(
    'someFeature/fetchSomeFeature',
    async (params, { rejectWithValue }) => {
        try {
            const response = await apiClient.get<BooksTypes[]>(API_ROUTES.MONGO_DB, {params});
            return response.data;
        } catch (error) {
            return rejectWithValue(error as ApiError);
        }
    }
);



