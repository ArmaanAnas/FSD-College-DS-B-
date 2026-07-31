import React from 'react'

const Card2 = () => {
  return (
    <div style={{ border: '2px solid black', width: '150px', padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h3 style={{ margin: '0 0 15px 0' }}>Tea</h3>
      <div style={{ width: '70px', height: '70px', borderRadius: '50%', border: '1px solid black', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '15px' }}>
        Img
      </div>
      <p style={{ margin: 0, fontSize: '18px' }}>$200</p>
    </div>
  )
}

export default Card2