import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
    isActive: null,
    user: {
        // "id": "user-1",
        // "name": "Arif Wibowo",
        // "email": "arif.wibowo@techhub.id",
        // "location": "Jakarta",
        // "bio": "Lead Event Coordinator di TechHub ID dengan fokus pada seminar teknologi nasional.",
        // "isAttendee": false,
        // "status": "active",
        // "profesionals": {
        //     "role": "organizer",
        //     "job": "Event Program Manager",
        //     "office": "TechHub ID"
        // },
        // "communitys": [],
        // "events": [],
        // "image": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
        // "createdAt": "1787742224923",
        // "updatedAt": "1787742224923"
    },
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
            const user = users.find((e)=> e.email === payload.email)
            if(user === -1) {
                return rejectWithValue("email atau password salah!")
            }
            if(user.password !== btoa(payload.password)) {
                return rejectWithValue("email atau password salah!")
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
    reducers: {},
    extraReducers: (builder) => {
        builder
        // Login
        .addCase(authLogin.pending, (state) => {
            state.isLoading =true
            state.isSuccess = false
            state.isError = false
            state.message = null 
            state.isActive = null
            state.user = {}
        })
        .addCase(authLogin.fulfilled, (state, {payload}) => {
            state.isLoading = false
            state.isSuccess = true
            state.message = "Login succes !" 
            state.isActive = payload.id
            state.user = payload
        })
        .addCase(authLogin.rejected, (state) => {
            state.isLoading = false
            state.isError = true
            state.message = null 
            state.isActive = null
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
            state.isActive = null
            state.user = {}
        })
        .addCase(authLogout.rejected, (state) => {
            state.isLoading = false
            state.isError = true
            state.message = "Logout failed !"
        })
    }
})

export default auth.reducer