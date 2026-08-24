import { createSlice } from "@reduxjs/toolkit";

const initialState  = {
    user: {
        users: [
            {
                id: "1787470403207",
                email: "hidayatmaruf99@gmail.com",
                name: "alma'ruf hidayat",
                password: "12345678",
                role: "attendee"
            }
        ],
        isLoading: false,
        isSuccess: false,
        isError: false,
        message: null
    },
    actived: {
        id: null,
        isActive: false,
        role: "guest",
        isError: false,
        message: null
    },
    userExist: {
        isExist: false,
        message: null,
        data: {}
    },
    isDark: false,
    isPending: false,
    isSuccess: false,
    isError: false,
    message: null,
}

const eventHub = createSlice({
    name: "eventHub",
    initialState,
    reducers: {
        registerUser: (state, {payload}) => {
            state.user.isLoading = true
            state.user.isError = false
            state.user.isSuccess = false
            state.user.message = null
            const isReady =  state.user.users.some((e)=> e.email === payload.email)

            if(isReady) {
                state.user.isLoading = false
                state.user.isError = true
                state.user.message = "Email sudah terdaftar !"
                return
            }

            state.user.isLoading = false
            state.user.isSuccess = true
            state.user.message = `${payload.email} berhasil terdaftar !`
            state.user.users.push(payload)
        },
        tglDark: (state) => {
            state.isDark = !state.isDark
        },
        checkEmail: (state, {payload}) => {
            state.userExist.isExist = false
            state.userExist.message = null
            const isReady =  state.user.users.find((e)=> e.email === payload || e.id === payload)

            if (!isReady) {
                state.userExist.message = "email belum terdaftar !"
                return
            }
            
            state.userExist.isExist = true
            state.userExist.message = `${payload} ready exist !`
            state.userExist.data = isReady
        },
        login: (state, {payload})=> {
            const isReady =  state.user.users.find((e)=> e.email === payload.email)

            if (!isReady) {
                state.actived.isActive = false
                state.actived.isError = true
                state.actived.message = "email salah atau belum terdaftar"
                return
            }

            if (btoa(isReady.password) !== payload.password) {
                state.actived.isActive = false
                state.actived.isError = true
                state.actived.message = "Pasword Salah !"
                return
            }
            
            state.actived.isError = false
            state.actived.isActive = true
            state.actived.id = isReady.id
            state.actived.message = null
            state.actived.role = isReady.role
        },
        logout: (state)=> {
            state.actived.isError = false
            state.actived.isActive = false
            state.actived.id = null
            state.actived.message = null
            state.actived.role = "guest"
        }

    }
})

export const {
    registerUser, 
    login,
    logout,
    tglDark,
    checkEmail,
} = eventHub.actions
export default eventHub.reducer