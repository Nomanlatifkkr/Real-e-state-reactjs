import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer'


const Home = () => {
  return (
  <>
  <Header/>
  <Outlet/>
  <Footer/>
  </>
  )
}

export default Home
