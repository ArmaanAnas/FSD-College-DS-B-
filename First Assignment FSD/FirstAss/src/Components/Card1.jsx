import React from 'react'

const Card1 = () => {
  return (
    <div style={{ border: '2px solid black', width: '150px', padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h3 style={{ margin: '0 0 15px 0' }}>Pizza</h3>
      <div style={{ width: '70px', height: '70px', borderRadius: '50%', display: 'flex' }}>
        <img src="https://img.magnific.com/premium-psd/pizza-with-olives-tomatoes-olives-it_1268410-858.jpg?semt=ais_hybrid&w=740&q=80" alt="Pizza" />
      </div>
      <p style={{ margin: 0, fontSize: '18px' }}>$100</p>
    </div>
  )
}

export default Card1