import React, { useState } from "react";
import Context from "../provider/context";

export default function Provider(props) {
  const { children } = props;
  const [store, setStore] = useState([]);

  const addToCart = (product, quantity) => {
    if (store.length === 0) {
      let newProduct = {
        ...product,
        quantity: parseInt(quantity)
      };
      setStore([newProduct])
    } else if (!store.find((producto) => producto.id === product.id)) {
      let newProduct = {
        ...product,
        quantity: parseInt(quantity)
      };
      setStore([...store, newProduct])
    } else {
      let newStore = store.map((producto) => {
        if (producto.id === product.id) {
          return {...producto, quantity: producto.quantity + parseInt(quantity)}
        }
        return producto;
      });
      setStore(newStore);
    }
  };

  const removeFromCart = (product) => {
    let newStore = store.filter((item) => item.id !== product.id);
    setStore(newStore);
  };

  const clearCart = () => {
    setStore([]);
  };

  return (
    <Context.Provider value={{ store, addToCart, removeFromCart, clearCart }}>
      {children}
    </Context.Provider>
  );
}