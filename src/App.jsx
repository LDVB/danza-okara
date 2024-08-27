import { useState } from 'react'
import React from 'react';
import './App.css'
import Menu from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'
import AppRoutes from './routes/AppRoutes'

function App() {
  return (
    <>
   <Menu/>
   <AppRoutes/>
   <Footer/>

    </>
  )
}

export default App
