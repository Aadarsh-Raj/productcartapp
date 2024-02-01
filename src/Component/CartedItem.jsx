import React from "react";
import { CartFunction } from "../Context/CartContext";

const CartedItem = () => {
  const cartCtx = CartFunction();
  console.log(cartCtx.cartedItem);
  return (
    <>
      <div className="carted-item">
        <div className="carted-item">
          {cartCtx.cartedItem.map((ele) => (
            <div style={{display:"flex", gap:"1rem"}}>
              <p>{ele.name}</p>
              <p>{ele.price}</p>
              <p>{ele.quantity}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CartedItem;
