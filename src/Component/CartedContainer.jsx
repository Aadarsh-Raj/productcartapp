import React from 'react'
import './Style/cartedcontainer.css'
import CartedItem from './CartedItem'
const CartedContainer = () => {

  
  return (
    <>
    <div className="carted-container">
        <h2>Cart</h2>
        <CartedItem />
    </div>
    </>
  )
}

export default CartedContainer
