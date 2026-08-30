import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
    actived: {
        isActive: false,
        auth: null
    },
    user: {},
    isLoading: false,
    isSuccess: false,
    isError: false,
    message: null
}

export const authLogin = createAsyncThunk(
    "authLogin",
    async (payload, {getState, rejectWithValue}) => {
        try {
            const state = getState()
            const users = state.users.data
            console.log(users)
            const user = users.find((e)=> e.email === payload.email)
            if(!user) {
                return rejectWithValue("Email atau password salah!")
            }
            if(user.password !== btoa(payload.password)) {
                return rejectWithValue(`Email atau password salah!`)
            }
            return user
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

export const authLogout = createAsyncThunk(
    "authLogout",
    async (_, {getState, rejectWithValue}) => {
        try {
            const state = getState
            const user = state.auth.isActive
            return user
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

const auth = createSlice({
    name: "auth",
    initialState,
    reducers: {
        deleteMessage: (state) => {
            state.isLoading = true
            state.isSuccess = false
            state.isError = false
            state.message = null
            state.actived = {
                isActive: false,
                auth: null
            }
            state.user = {}
        } 
    },
    extraReducers: (builder) => {
        builder
        // Login
        .addCase(authLogin.pending, (state) => {
            state.isLoading = true
            state.isSuccess = false
            state.isError = false
            state.message = null
            state.actived = {
                isActive: false,
                auth: null
            }
            state.user = {}
        })
        .addCase(authLogin.fulfilled, (state, {payload}) => {
            state.isLoading = false
            state.isSuccess = true
            state.message = "Login succes !" 
            state.actived = {
                isActive: true,
                auth: payload.id
            }
            state.user = payload
        })
        .addCase(authLogin.rejected, (state, {payload}) => {
            console.log("message : ", payload)
            state.isLoading = false
            state.isError = true
            state.message =  payload
            state.actived = {
                isActive: false,
                auth: null
            }
            state.user = {}
        })
        // Logout
        .addCase(authLogout.pending, (state) => {
            state.isLoading =true
            state.isSuccess = false
            state.isError = false
            state.message = null
        })
        .addCase(authLogout.fulfilled, (state) => {
            state.isLoading = false
            state.isSuccess = true
            state.message = "Logout success !"
            state.actived = {
                isActive: false,
                auth: {}
            }
            state.user = {}
        })
        .addCase(authLogout.rejected, (state) => {
            state.isLoading = false
            state.isError = true
            state.message = "Logout failed !"
        })
    }
})

export const {deleteMessage} = auth.actions

export default auth.reducer