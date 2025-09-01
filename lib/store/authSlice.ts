import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import store from '.'
type User = {
    id: string,
    fullName: string,
    email: string
}

type AuthState = {
    user: null | User
    token: string | null
}
const initialState: AuthState = {
    user: null,
    token: null
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuth: (state, action) => {
            state.token = action.payload.token
            state.user = action.payload.user
            localStorage.setItem('user', JSON.stringify(action.payload.user))
            localStorage.setItem('token', JSON.stringify(action.payload.token))
            console.log(state.user, action.payload)
        },
        clearAuth: (state) => {
            state.token = null
            state.user = null
        },
        setToken: (state, action) => {
            state.token = action.payload.token

        },
        setUser: (state, action) => {
            state.user = action.payload.user

            console.log(action.payload)
        }
    }
})

export const authSelector = (state: ReturnType<typeof store.getState>) => state.auth.user
export const { setAuth, setUser, setToken, clearAuth } = authSlice.actions
export default authSlice.reducer