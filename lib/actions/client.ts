import axios from "axios";
import { api, withAxios } from "../axios";

const noInterceptor = axios.create({
    baseURL: 'https://backend.mbahvictor16.workers.dev',
    headers: { "Content-Type": 'application/json' },
    withCredentials: true
})

const controller = new AbortController()

export async function refresh(token: string) {
    const res = await api.post('/auth/token', { token })
    if (!res.data) {
        return Promise.reject(res)
    }
    return res.data
}

export async function loginUser({ email, password }: { email: string, password: string }) {
    const res = await noInterceptor.post('/auth/login', { email, password }, {signal: controller.signal})
    if (!res.data) {
        return Promise.reject(res)
    }
    return res.data
}

export async function signupUser(data: Record<string, string>) {
const res = await noInterceptor.post('/users/create', { ...data }, {signal: controller.signal})
    if (!res.data) {
        return Promise.reject(res)
    }
    return res.data
}


export async function getUser(id: string) {
    const response = await withAxios(api.get(`/users/${id}`, { signal: controller.signal }))
    if (!response.data) {
        return Promise.reject(response)
    }
    console.log(response.data.data)
    return response.data.data
}

export async function generateVideo({ image, prompt }: { image: string; prompt: string }) {
    const response = await withAxios(() => axios.post('/videos/generate', { image, prompt }, { signal: controller.signal }))
    if (!response.data) {
        return Promise.reject(response)
    }
    return response.data
}

export async function generateImage({ prompt }: { prompt: string }) {
    const response = await withAxios(api.post('/images/generate', { prompt }, { signal: controller.signal }))
    if (!response.data) {
        return Promise.reject(response)
    }
    return response.data
}

export async function getPricing() {
    const response = await noInterceptor.get('/plans/pricing', { signal: controller.signal })
    if (!response.data) {
        return Promise.reject(response)
    }
    return response.data.data
}

export async function getBillingUrl({planId, price, user}: {planId: string; price: number; user: Record<any, any>|null}) {
    const response = await withAxios(api.post('/plans/subscribe', {planId, price, user}, {signal: controller.signal}))
    if(!response.data) {
        return Promise.reject(response)
    }
    return response.data
}

