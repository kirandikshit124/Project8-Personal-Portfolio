import { useState } from 'react'
import Navbar from './components/Navbar'
import './App.css'
import MainPage from './components/MainPage'
import Footer from './components/Footer'
import About from './components/About'
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
    <div>
      <Navbar></Navbar>
      <MainPage />
      <About />
      <Footer />
    </div>
    </>
  )
}

export default App
