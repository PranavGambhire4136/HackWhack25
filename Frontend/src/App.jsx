import { useState } from 'react'
import Navbar from './Component/Navbar'
import AuthPages from './pages/AuthPages'
import { Home } from './pages'
import { Routes, Route } from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<AuthPages />} />
      </Routes>
    </>
  )
}

export default App
