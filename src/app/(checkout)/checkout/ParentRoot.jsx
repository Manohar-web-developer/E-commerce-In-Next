'use client'
import { store } from '@/app/(store)/redux/store'
import React from 'react'
import { Provider } from 'react-redux'
import MainLayout from './MainLayout'
import Header from './components/Header'

export default function ParentRoot({ children }) {
    return (
        <>
        <Provider store={store}>
        <Header />
        

            {children}
        
        </Provider>
        </>
    )
}
