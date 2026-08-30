import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import fetchData from "../../utils/helper/fetchData";

const initialState  = {
    data: [],
    isLoading: false,
    isSuccess: false,
    isError: false,
    message: null
}

export const getUsers = createAsyncThunk(
    "getUsers",
    async (_, {rejectWithValue}) => {
        try {
            const data = await fetchData("/data/users.json")
            return data
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

const users = createSlice({
    name: "users",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(getUsers.pending, (state) => {
            state.isPending = true;
            state.isSuccess = false;
            state.isError = false;
            state.message = null;
            state.data = []
        })
        .addCase(getUsers.fulfilled, (state, {payload}) => {
            state.isPending = false;
            state.isSuccess = true;
            state.message = "success load users !";
            state.data = payload
        })
        .addCase(getUsers.rejected, (state) => {
            state.data.isPending = false;
            state.data.isError = true;
            state.data.message = "failed load users !";
        });
    }
})

export default users.reducer