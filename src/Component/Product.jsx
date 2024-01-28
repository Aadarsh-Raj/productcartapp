import React from 'react'
import ProductCartItem from './ProductCartItem';
import './Style/productcartcontainer.css'
const Product = () => {
    const ProductsData = [
        {"id": "1", "name": "Product-1", "price":"100"},
        {"id": "2", "name": "Product-2", "price":"200"},
        {"id": "3", "name": "Product-3", "price":"300"},
        ];
        


  return (
   <>
   <div className="product-cart-container">
    <h2>Products</h2>
{
    ProductsData.map((ele)=>(<ProductCartItem key={ele.id} data={ele} prodId={ele.id}/>))
}
   </div>
   </>
  )
}

export default Product
