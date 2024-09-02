import {createAsyncThunk} from "@reduxjs/toolkit";
import {ApiError, ReflectType} from "src/api/types";
import {apiClient} from "src/api/apiClient";
import {API_ROUTES} from "src/api/endpoints";
import {CartType} from "src/store/carts/cartTypes";


export const getCart = createAsyncThunk<
    CartType,
    string,
    ReflectType
>(
    'cart/getCart',
    async (params, { rejectWithValue }) => {
        try {
            const response = await apiClient.get<CartType>(API_ROUTES.GET_BY_ID(params));
            return response.data;
        } catch (error) {
            return rejectWithValue(error as ApiError);
        }
    }
);