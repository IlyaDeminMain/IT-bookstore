import {createAsyncThunk} from "@reduxjs/toolkit";
import {API_ROUTES} from "src/api/endpoints";
import axios from "axios";

interface Data {
    // ...
}

export default createAsyncThunk(
    'users/fetchById',
    async (arg, {rejectWithValue}) => {

        const response = await axios.get<Data>(API_ROUTES.NEW)
        return response.data

    },
)