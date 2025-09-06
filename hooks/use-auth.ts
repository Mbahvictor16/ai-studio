import { authSelector, setToken, setUser } from '@/lib/store/authSlice'
import { useDispatch, useSelector } from 'react-redux'

import {useEffect, useState} from 'react'
import { useRouter } from 'next/navigation'

export function useAuth() {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const dispatch = useDispatch()
    const router = useRouter()
    const [auth, setAuth] = useState({
        user: {
            id: null
        },
        token: null
    })

    useEffect(() => {
        const token = localStorage.getItem('token')
        const user = localStorage.getItem('user')

        if (user) {
            setIsAuthenticated(true)
            dispatch(setUser(JSON.parse(user)))
            setAuth((prevAuth) => ({...prevAuth, user: JSON.parse(user)}))
        }
        
        if(token) {
            dispatch(setToken(JSON.parse(token)))
            setAuth((prevAuth) => ({...prevAuth, token: JSON.parse(token)}))
        }
    
    }, [])

    return {
        isAuthenticated,
        auth
    }
}