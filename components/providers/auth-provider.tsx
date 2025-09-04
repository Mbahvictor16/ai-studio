import { useEffect } from "react"
import {useDispatch, useSelector} from 'react-redux'
import { authSelector, setAuth, setUser } from "@/lib/store/authSlice"
import { useAuth } from "@/hooks/use-auth"

export function AuthProvider({children} : {children: React.ReactNode}) {
    const {isAuthenticated, auth} = useAuth()

    
}