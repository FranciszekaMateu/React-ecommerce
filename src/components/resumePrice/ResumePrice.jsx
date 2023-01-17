import React from 'react'
import { useContext } from "react";
import Context from "../provider/context"
import { Button } from 'react-bootstrap';
import "./resumePrice.css"
export default function ResumePrice() {
const { store,clearCart} = useContext(Context);
  let totalprice = 0;
  store.map((product, index) => {
    totalprice +=parseInt(product.precio) 
  })
  return (
    <div className='totalprice'>
        <h2>Factura</h2>
        {store.map((product, index) => (
                        <div key={product.id} className="product__container">
                          {product.nombre} <strong>{product.quantity}X {product.precio}US$</strong>
                        </div>
                      ))}
        <h3>Precio total:</h3><h1>{totalprice}US$</h1>
        <Button onClick={clearCart} className='clear-item'>
            Vaciar carrito
        </Button>
        <Button  className='comprar'>
            Comprar
        </Button>
    </div>
  )
}
