import { useState } from 'react'
import Navbar from './Component/Navbar'
import AuthPages from './pages/AuthPages'
import { Home } from './pages'
import { Routes, Route } from 'react-router-dom'
import { Quiz } from './Component'
import Gemini from './Component/Gemini'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<AuthPages />} />
        <Route path = "/quiz" element={<Quiz />} />
        <Route path = '/1230'element = {<Gemini />} />
      </Routes>
    </>
  )
}

export default App
