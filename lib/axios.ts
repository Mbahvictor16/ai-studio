import axios from 'axios'
import store from './store'
import { refresh } from './actions/client'
import { setToken } from './store/authSlice'

export const api = axios.create({
    baseURL: 'https://backend.mbahvictor16.workers.dev',
    headers: { 'Content-Type': 'application/json', },
    withCredentials: true
})

export const withAxios = async (request: any) => {


    const requestInterceptor = api.interceptors.request.use((config) => {
        if (!config.headers.Authorization) {
            const token = store.getState().auth.token
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    }, (err) => Promise.reject(err))
    const responseInterceptor = api.interceptors.response.use(
        response => response,
        async (err) => {
            const prevRequest = err?.config

            if (err.response.status === 401) {
                // prevRequest.sent = true
                const storeToken = store.getState().auth.token
                const res = await refresh(storeToken as string)
                store.dispatch(setToken(res.data.token))
                console.log(res.data)
                const newToken = res.data.token
                prevRequest.headers.Authorization = `Bearer ${newToken}`
                return api(prevRequest)
            }
            return Promise.reject(err)
        }
    )

    const response = await request

    api.interceptors.request.eject(requestInterceptor!)
    api.interceptors.response.eject(responseInterceptor!)
    return response
}