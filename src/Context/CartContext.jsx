import { createContext, useContext, useEffect, useState } from "react";

const CartContextController = createContext({});

export const CartFunction = () => {
  return useContext(CartContextController);
};

const CartContext = (prop) => {
  const ProductsData = [
    { id: "1", name: "Product-1", price: "100" },
    { id: "2", name: "Product-2", price: "200" },
    { id: "3", name: "Product-3", price: "300" },
  ];

  const [totalPrice, setTotalPrice] = useState(0);
  const [count, setCount] = useState(0);
  const incFunction = (id) => {
    ProductsData.filter((ele) => {
      if (ele.id == id) {
        console.log(count, "Arya");
       return setCount((value) => value + 1);

      }
      return ele;
    });

  };
  const decFunction = () => {
    console.log(count, "Dec");
    if (count >= 1) {
      setCount((value) => value - 1);
    }
  };

  const functionObject = {
    totalPrice,
    setTotalPrice,
    incFunction,
    decFunction,
    count,
    setCount,
    ProductsData,
  };
  return (
    <CartContextController.Provider value={functionObject}>
      {prop.children}
    </CartContextController.Provider>
  );
};

export default CartContext;
