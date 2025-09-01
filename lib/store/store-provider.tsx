'use client'

import React from 'react'
import {Provider} from 'react-redux'
import store from '.'
import { AuthProvider } from '@/components/providers/auth-provider'

export default function StoreProvider({ children }: { children: React.ReactNode }) {
    return (
        <Provider store={store}>
            <AuthProvider>{children}</AuthProvider>
        </Provider>
    )
}