import React from 'react'

const CartedItem = (prop) => {
  return (
    <>
        <div className="carted-item">
            <div className="product-name">
                    {
                        prop.data.name
                    }
            </div>
            <div className="quantity-container">
                2 x price
            </div>
        </div>
    </>
  )
}

export default CartedItem
