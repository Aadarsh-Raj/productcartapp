import React, {useReducer, useState} from 'react'
import Button from './Button'
import './Style/productcartitem.css'
import { CartFunction } from '../Context/CartContext'
const ProductCartItem = (prop) => {
    const  cartCtx = CartFunction();
const [quantity, setQuantity] = useState(0);

function incQuan (item){
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    cartCtx.manageCartedItem(item, newQuantity);

}
function decQuan (item){
    let newQuantity = 0;
    if(quantity >= 1){ newQuantity = quantity - 1;}
    setQuantity((prevValue) => prevValue >= 1 ? prevValue - 1 : prevValue);
    cartCtx.manageCartedItem(item, newQuantity);
}

//     const reducer = (state, action)=>{
//         switch (action.type){
//             case 'incBtn':
//                 return { count: state.count + 1};
//             case 'decBtn':
//                 return state.count > 0 ? {count: state.count -1} : state;
//             default:
//                 return state;
//         }
//     }
// const [state, dispatch] = useReducer(reducer, {count:0});

  return (
    <>
    <div className="product-cart-item">
        <div className="product-name">
            {
                prop.data.name
            }
        </div>
        <div className="product-price">
            {prop.data.price}
        </div>
        <div className="product-number-button">
            <Button cName="decBtn" sign="-" clickEvent={()=> decQuan(prop.data, quantity)}/>
                {quantity}
            <Button cName="incBtn" sign="+" clickEvent={()=>incQuan(prop.data, quantity)}/>
            
        </div>
    </div>
    </>
  )
}

export default ProductCartItem
