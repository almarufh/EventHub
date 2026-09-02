import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
    actived: {
        isActive: false,
        auth: null
    },
    user: {
        // "id": "1787742224923",
        // "name": "Alma'ruf Hidayat",
        // "email": "gi",
        // "password": "MTIzNDU2Nzg=",
        // "location": "Jakarta",
        // "bio": "Lead Event Coordinator di TechHub ID dengan fokus pada seminar teknologi nasional.",
        // "isAttendee": true,
        // "status": "active",
        // "profesionals": {
        //     "role": "attendee",
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
            console.log(users)
            const user = users.find((e)=> e.email === payload.email)
            if(!user) {
                return rejectWithValue("Email salah!")
            }
            console.log(user.password, btoa(payload.password))
            // if(user.password !== btoa(payload.password)) {
            if(user.password !== payload.password) {
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
            const state = getState()
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