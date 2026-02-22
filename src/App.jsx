import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { PostIndex } from './pages/PostIndex/index'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PostIndex />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
