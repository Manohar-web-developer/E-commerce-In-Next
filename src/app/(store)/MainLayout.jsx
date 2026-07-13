'use client'
import React from 'react'
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import { Provider } from 'react-redux';
import { store } from './redux/store';
function MainLayout({children}) {
  return (
    <>
    <Provider store={store}>
    <Header/>
    {children}
    <Footer/>
    </Provider>
   
    </>
  )
}

export default MainLayout