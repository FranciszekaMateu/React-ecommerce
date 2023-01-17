import React from "react"
import "./cartWidget.css"
import Context from "../provider/context"
import { Link } from "react-router-dom";
import { useContext } from "react"
import { useEffect,useState } from "react"
const CartWidget = () => {
    let { store } = useContext(Context);
    const [num, setNum] = useState(1);
    useEffect(() => {
        setNum(store.length)
    }, [store]);
    return (
        <div className="cart_widget">
            <Link to={`/cart`}>Carrito</Link>
            <img src="https://res.cloudinary.com/dbexeui7n/image/upload/v1669484139/3394009_pcb2zf.png"></img>          
            {store ? <h2>{store.length}</h2> : 0}  
        </div>
    )
}

export default CartWidget