import axios from "axios";
import { api, withAxios } from "../axios";

const noInterceptor = axios.create({
    baseURL: 'https://backend.mbahvictor16.workers.dev',
    headers: { "Content-Type": 'application/json' },
    withCredentials: true
})

export async function refresh(token: string) {
    const res = await api.post('/auth/token', { token })
    if (!res.data) {
        return Promise.reject(res)
    }
    return res.data
}

export async function loginUser({ email, password }: { email: string, password: string }) {
    const res = await noInterceptor.post('/auth/login', { email, password })
    if (!res.data) {
        return Promise.reject(res)
    }
    return res.data
}

export async function signupUser(data: Record<string, string>) {
    const res = await noInterceptor.post('/users/create', { ...data })
    if (!res.data) {
        return Promise.reject(res)
    }
    return res.data
}


export async function getUser(id: string) {
    const controller = new AbortController()
    const response = await withAxios(api.get(`/users/${id}`, { signal: controller.signal }))
    if (!response.data) {
        return Promise.reject(response)
    }
    console.log(response.data.data)
    return response.data.data
}

export async function generateVideo({ image, prompt }: { image: string; prompt: string }) {
    const controller = new AbortController()
    const response = await withAxios(() => axios.post('/videos/generate', { image, prompt }, { signal: controller.signal }))
    if (!response.data) {
        return Promise.reject(response)
    }
    return response.data
}

export async function generateImage({ prompt }: { prompt: string }) {
    const controller = new AbortController()
    const response = await withAxios(api.post('/images/generate', { prompt }, { signal: controller.signal }))
    console.log()
    if (!response.data) {
        return Promise.reject(response)
    }
    return response.data
}

export async function getPricing() {
    const controller = new AbortController()
    const response = await axios.get('/plans/pricing', { signal: controller.signal })
    if (!response.data) {
        return Promise.reject(response)
    }
    return response.data.data
}

