import React from 'react'
import { Button } from 'react-bootstrap'
import ResumePrice from '../resumePrice/ResumePrice'
import CarouselSlider from '../carruselSlider/carruselSlider'
import { useContext } from "react";
import Context from "../provider/context"
import "./cart.css"
import Swal  from 'sweetalert2';
export default function Cart() {
  const { store,removeFromCart} = useContext(Context);
  const alert =(product) => {
    Swal.fire({
    position: 'center',
    icon: 'error',
    title: 'Producto removido del carrito',
    showConfirmButton: false,
    timer: 1500
    })
    removeFromCart(product)
  }
  return (
    <div className='cart'>
        <CarouselSlider/>
        <div className='carrito'>
            <div className='cartproducts'>
                <h2>Productos en el carrito :</h2>
                    { store.length != 0 ? store.map((product, index) => (
                        <div key={product.id} className="product__container">
                          <div className='product'>
                            <img src={product.link_foto}  />
                            <h2>{product.nombre}</h2>
                            Precio:<h3>{product.precio} US$</h3>
                            Cantidad:<h4>{product.quantity}</h4>
                          </div>
                          <Button
                            className="remove-item"
                            onClick={() => alert(product)}
                          > 
                          Eliminar de carrito
                          </Button>
                        </div>
                      )) : "No hay productos en tu carrito :("}
            </div>
            <ResumePrice />
        </div>
    </div>
  )
}
