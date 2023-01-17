import { useContext } from "react";
import Context from "../provider/context"
import "./productCounter.css"
import { Button } from "react-bootstrap";
import Swal from "sweetalert2";
export default function ProductsCounter(props) {
  const alert =(product,cantidad) => {
    Swal.fire({
    position: 'center',
    icon: 'success',
    title: 'Producto agregado a carrito',
    showConfirmButton: false,
    timer: 1500
    })
    addToCart(product,cantidad)
  }
  const { addToCart} = useContext(Context);
  const {item} = props
  return (
    <>
        <div className="product_container">
          <Button
          onClick={() => alert(item,1)}
            className="carrito_buttom"
          >
            Añadir a carrito
          </Button>
        </div>
    </>
  );
}