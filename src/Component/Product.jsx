import React from 'react'
import ProductCartItem from './ProductCartItem';
import './Style/productcartcontainer.css'
import { CartFunction } from '../Context/CartContext'
const Product = () => {
    const cartCtx = CartFunction();


  return (
   <>
   <div className="product-cart-container">
    <h2>Products</h2>
{
    cartCtx.ProductsData.map((ele)=>(<ProductCartItem key={ele.id} data={ele} prodId={ele.id}/>))
}
   </div>
   </>
  )
}

export default Product
