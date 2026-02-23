import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { PostIndex } from './pages/PostIndex/index'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <header className="bg-[#333333] text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
          <p className="text-lg font-bold">Blog</p>
          <a href="#" className="text-sm font-bold hover:opacity-80">
            お問い合わせ
          </a>
        </div>
      </header>

      <Routes>
        <Route path="/" element={<PostIndex />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
