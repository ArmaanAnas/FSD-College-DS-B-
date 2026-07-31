import React from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Card1 from './Components/Card1'
import Card2 from './Components/Card2'
import Card3 from './Components/Card3'

const App = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      <Header />
      <div style={{ flex: 1, padding: '20px', textAlign: 'center' }}>
        <h2>Our Hotel Menu</h2>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', marginTop: '30px' }}>
          <Card1 />
          <Card2 />
          <Card3 />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default App