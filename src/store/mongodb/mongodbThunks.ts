import { createAsyncThunk } from '@reduxjs/toolkit';
import { apiClient} from "src/api/apiClient";
import { ApiError} from "src/api/types";
import {MongodbTypes, FetchBooksParams} from "src/store/mongodb/mongodbTypes";
import {ReflectType} from "src/api/types";
import {API_ROUTES} from "src/api/endpoints";


export const getMongodb = createAsyncThunk<
    MongodbTypes,
    FetchBooksParams,
    ReflectType
>(
    'mongodb/getMongodb',
    async (params, { rejectWithValue }) => {
        try {
            const response = await apiClient.get<MongodbTypes>(API_ROUTES.MONGO_DB, params);
            return response.data;
        } catch (error) {
            return rejectWithValue(error as ApiError);
        }
    }
);