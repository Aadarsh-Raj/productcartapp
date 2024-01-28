import React, {useReducer} from 'react'
import Button from './Button'
import './Style/productcartitem.css'
import { CartFunction } from '../Context/CartContext'
const ProductCartItem = (prop) => {
    const cartCtx = CartFunction();
    console.log(cartCtx);
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
            <Button cName="decBtn" sign="-" clickEvent={()=>cartCtx.decFunction()}/>
                {cartCtx.count}
            <Button cName="incBtn" sign="+" clickEvent={()=>cartCtx.incFunction(prop.prodId)}/>
            
        </div>
    </div>
    </>
  )
}

export default ProductCartItem
