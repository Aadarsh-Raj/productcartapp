import React from 'react'
import Product from './Product'
import CartedContainer from './CartedContainer'
import './Style/main.css'
const Main = () => {

  return (
    <>
    <main className="main">
        <Product />
        <CartedContainer />
    </main>
    </>
  )
}

export default Main
