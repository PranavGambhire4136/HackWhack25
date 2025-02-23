import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom';

import { Navbar } from './Components'
import { Login, SignUp, Home } from './pages'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path = "/" element = {<Home />} />
        <Route path = "/signup" element = {<SignUp/>} />
        <Route path = '/login' element = {<Login />} />
      </Routes>
    </>
  )
}

export default App
