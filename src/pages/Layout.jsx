import React from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import { Provider } from 'react-redux'
import appStore from '../utils/appStore'
const Layout = () => {
  return (
    <Provider store={appStore}>
        <Header/>
        <Outlet/>
        <Footer/>
    </Provider>
  )
}

export default Layout
