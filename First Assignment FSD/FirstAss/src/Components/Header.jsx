import React from 'react'

const Header = () => {
  return (
    <div style={{ backgroundColor: '#000022', color: 'white', padding: '15px 30px', display: 'flex', alignItems: 'center' }}>
      <div style={{ width: '50px', height: '50px', borderRadius: '50%', display: 'flex', }}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTigQjGr2lvhaQF1Lq6VRUYmua3i8yQTTw0zV5F2Bgzqw&s=10" alt="ABES" />
      </div>
      <h1 style={{ flex: 1, textAlign: 'center', margin: 0, fontSize: '24px' }}>
        Welcome Abes Hotel
      </h1>
    </div>
  )
}

export default Header