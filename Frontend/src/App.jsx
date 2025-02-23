import { useState } from 'react'
import Navbar from './Component/Navbar'
import AuthPages from './pages/AuthPages'
import { Home,Quiz } from './pages'
import { Routes, Route, useLocation } from 'react-router-dom'
import {  } from './Component'


function App() {
  const [count, setCount] = useState(0)
  const location = useLocation()
  const showNavbar = location.pathname !== '/quiz'

  return (
    <>
      {showNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<AuthPages />} />
        <Route path = "/quiz" element={<Quiz />} />
        {/* <Route path = '/1230'element = {<Gemini />} /> */}
      </Routes>
      
    </>
  )
}

export default App
