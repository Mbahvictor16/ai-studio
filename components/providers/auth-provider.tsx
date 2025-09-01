import { useEffect } from "react"
import {useDispatch, useSelector} from 'react-redux'
import { authSelector, setAuth, setUser } from "@/lib/store/authSlice"

export function AuthProvider({children} : {children: React.ReactNode}) {
    const dispatch = useDispatch()
    const localUser = useSelector(authSelector)
    useEffect(() => {
        const local = localStorage.getItem('user')

        if(local) {
            console.log(local)
            const user = JSON.parse(local)
            dispatch(setUser(user))
        }
    }, [])


        return (
            <>{children}</>
        )
}