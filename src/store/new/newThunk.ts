import {createAsyncThunk} from "@reduxjs/toolkit";
import {ReflectType} from "src/api/types";
import {apiClient} from "src/api/apiClient";

import {ApiError} from "src/api/types";
import {FetchNewParams, NewTypes} from "src/store/new/newTypes";
import {API_ROUTES} from "src/api/endpoints";

export const getNew = createAsyncThunk<
    NewTypes,
    FetchNewParams,
    ReflectType
>(
    'new/getNew',
    async (params, { rejectWithValue }) => {
        try {
            const response = await apiClient.get<NewTypes>(API_ROUTES.NEW, params);
            return response.data;
        } catch (error) {
            return rejectWithValue(error as ApiError);
        }
    }
);