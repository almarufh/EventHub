import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import fetchData from "../../utils/helper/fetchData"

const initialState = {
    data: [],
    isLoading: false,
    isSuccess: false,
    isError: false,
    message: null
}

export const getEvents = createAsyncThunk(
    "getEvents",
    async (_, {rejectWithValue}) => {
        try {
            const data = await fetchData("/data/events/events.json")
            return data
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

export const postEvents = createAsyncThunk(
    "postEvents",
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

export const patchEvents = createAsyncThunk(
    "patchEvents",
    async (payload, {getState, rejectWithValue}) => {
        try {
            const state = getState()
            const prevEvents = state.events.data
            const isExist = prevEvents.some((e)=> e.id === payload.id)
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

export const deleteEvents = createAsyncThunk(
    "deleteEvents",
    async (payload, {getState, rejectWithValue}) => {
        try {
            const state = getState()
            const prevEvents = state.events.data
            const isExist = prevEvents.some((e)=> e.id === payload.id)
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

const events = createSlice({
    name: "events",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        // GET
        .addCase(getEvents.pending, (state) => {
            state.isLoading =true
            state.isSuccess = false
            state.isError = false
            state.message = null 
        })
        .addCase(getEvents.fulfilled, (state, {payload}) => {
            state.isLoading = false
            state.isSuccess = true
            state.isError = false
            state.message = "success load events !" 
            state.data = payload
        })
        .addCase(getEvents.rejected, (state) => {
            state.isLoading = false
            state.isError = true
            state.message = "failed load events !" 
        })
        // POST
        .addCase(postEvents.pending, (state) => {
            state.isLoading =true
            state.isSuccess = false
            state.isError = false
            state.message = null 
        })
        .addCase(postEvents.fulfilled, (state, {payload}) => {
            state.isLoading = false
            state.isSuccess = true
            state.isError = false
            state.message = "succes add new  events !" 
            state.data.push(payload)
        })
        .addCase(postEvents.rejected, (state) => {
            state.isLoading = false
            state.isError = true
            state.message = "failed add new  events !" 
        })
        // PATCH
        .addCase(patchEvents.pending, (state) => {
            state.isLoading =true
            state.isSuccess = false
            state.isError = false
            state.message = null 
        })
        .addCase(patchEvents.fulfilled, (state, {payload}) => {
            state.isLoading = false
            state.isSuccess = true
            state.isError = false
            state.message = "succes change  events !" 
            
            const checkEvents = state.data.findIndex((e) => e.id === payload.id)
            if(checkEvents !== -1) {
                state.data[checkEvents] = {
                    ...state.data[checkEvents],
                    ...payload
                }
            }
        })
        .addCase(patchEvents.rejected, (state, {payload}) => {
            state.isLoading = false
            state.isError = true
            state.message = payload 
        })
        // DELETE
        .addCase(deleteEvents.pending, (state) => {
            state.isLoading =true
            state.isSuccess = false
            state.isError = false
            state.message = null 
        })
        .addCase(deleteEvents.fulfilled, (state, {payload}) => {
            state.isLoading = false
            state.isSuccess = true
            state.isError = false
            state.data = state.data.filter((e) => e.id !== payload.id)
            
        })
        .addCase(deleteEvents.rejected, (state, {payload}) => {
            state.isLoading = false
            state.isError = true
            state.message = payload 
        })
    }
})

export default events.reducer