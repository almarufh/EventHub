import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import fetchData from "../../utils/helper/fetchData"

const initialState = {
    data: [],
    isLoading: false,
    isSuccess: false,
    isError: false,
    message: null
}

export const getCommunities = createAsyncThunk(
    "getCommunities",
    async (_, {rejectWithValue}) => {
        try {
            const data = await fetchData("/data/communities/communities.json")
            return data
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

export const postCommunities = createAsyncThunk(
    "postCommunities",
    async (payload, {rejectWithValue}) => {
        try {
            const response = await new Promise((resolve) => {
                setTimeout(()=> {
                    resolve(payload)
                }, 3000)
            } )
            return response
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

export const patchCommunities = createAsyncThunk(
    "patchCommunities",
    async (payload, {getState, rejectWithValue}) => {
        try {
            const state = getState()
            const prevcommunities = state.data
            const isExist = prevcommunities.some((e)=> e.id === payload.id)
            if(!isExist) {
                return rejectWithValue(`event id ${payload.id} not found !`)
            }
            const response = await new Promise((resolve) => {
                setTimeout(()=> {
                    resolve(payload)
                }, 3000)
            } )
            return response
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

export const deleteCommunities = createAsyncThunk(
    "deleteCommunities",
    async (payload, {getState, rejectWithValue}) => {
        try {
            const state = getState()
            const prevcommunities = state.data
            const isExist = prevcommunities.some((e)=> e.id === payload.id)
            if(!isExist) {
                return rejectWithValue(`event id ${payload.id} not found !`)
            }
            const response = await new Promise((resolve) => {
                setTimeout(()=> {
                    resolve(payload)
                }, 3000)
            } )
            return response
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

const communities = createSlice({
    name: "communities",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        // GET
        .addCase(getCommunities.pending, (state) => {
            state.isLoading =true
            state.isSuccess = false
            state.isError = false
            state.message = null 
        })
        .addCase(getCommunities.fulfilled, (state, {payload}) => {
            state.isLoading = false
            state.isSuccess = true
            state.isError = false
            state.message = "success load communities !" 
            state.data = payload
        })
        .addCase(getCommunities.rejected, (state) => {
            state.isLoading = false
            state.isError = true
            state.message = "failed load communities !" 
        })
        // POST
        .addCase(postCommunities.pending, (state) => {
            state.isLoading =true
            state.isSuccess = false
            state.isError = false
            state.message = null 
        })
        .addCase(postCommunities.fulfilled, (state, {payload}) => {
            state.isLoading = false
            state.isSuccess = true
            state.isError = false
            state.message = "succes add new  communities !" 
            state.data.push(payload)
        })
        .addCase(postCommunities.rejected, (state) => {
            state.isLoading = false
            state.isError = true
            state.message = "failed add new  communities !" 
        })
        // PATCH
        .addCase(patchCommunities.pending, (state) => {
            state.patchoading =true
            state.isSuccess = false
            state.isError = false
            state.message = null 
        })
        .addCase(patchCommunities.fulfilled, (state, {payload}) => {
            state.patchoading = false
            state.isSuccess = true
            state.isError = false
            state.message = "succes change  communities !" 
            
            const checkcommunities = state.data.findIndex((e) => e.id === payload.id)
            if(checkcommunities !== -1) {
                state.data[checkcommunities] = {
                    ...state.data[checkcommunities],
                    ...payload
                }
            }
        })
        .addCase(patchCommunities.rejected, (state, {payload}) => {
            state.patchoading = false
            state.isError = true
            state.message = payload 
        })
        // DELETE
        .addCase(deleteCommunities.pending, (state) => {
            state.isLoading =true
            state.isSuccess = false
            state.isError = false
            state.message = null 
        })
        .addCase(deleteCommunities.fulfilled, (state, {payload}) => {
            state.isLoading = false
            state.isSuccess = true
            state.isError = false
            state.data = state.data.filter((e) => e.id !== payload.id)
            
        })
        .addCase(deleteCommunities.rejected, (state, {payload}) => {
            state.isLoading = false
            state.isError = true
            state.message = payload 
        })
    }
})

export default communities.reducer