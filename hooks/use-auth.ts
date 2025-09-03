import { authSelector, setToken, setUser } from '@/lib/store/authSlice'
import { useDispatch, useSelector } from 'react-redux'

import {useEffect, useState} from 'react'

export function useAuth() {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const dispatch = useDispatch()
    const user = useSelector(authSelector)

    useEffect(() => {
        const token = localStorage.getItem('token')
        const user = localStorage.getItem('user')

        if (token && user) {
            setIsAuthenticated(true)
            dispatch(setUser(JSON.parse(user)))
            dispatch(setToken(JSON.parse(token)))
        }
    
    }, [])

    return {
        isAuthenticated,
        user
    }
}