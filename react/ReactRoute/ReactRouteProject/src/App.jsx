import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

function Home() {
  return <h1>This is my Home page.</h1>
}

function About() {
  return <h1>This is my About Us page.</h1>
}

const App = () => {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">ABOUT US</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App