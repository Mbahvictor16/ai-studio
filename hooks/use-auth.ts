import { authSelector, setToken, setUser } from '@/lib/store/authSlice'
import { useDispatch, useSelector } from 'react-redux'

import {useEffect, useState} from 'react'

export function useAuth() {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const dispatch = useDispatch()
    const auth = {
        user: {
            id: null
        },
        token: null
    }

    useEffect(() => {
        const token = localStorage.getItem('token')
        const user = localStorage.getItem('user')

        if (user) {
            setIsAuthenticated(true)
            dispatch(setUser(JSON.parse(user)))
            auth.user = JSON.parse(user)
        }
        
        if(token) {
            dispatch(setToken(JSON.parse(token)))
            auth.token = JSON.parse(token)
        }
    
    }, [])

    return {
        isAuthenticated,
        auth
    }
}