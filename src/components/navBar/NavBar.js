import React from "react";
import CartWidget from "./../cartWidget/CartWidget"
import "./NavBar.css"
const NavBar = () =>
{
    return(
        <header>
            <div className="logo">
                <img src="https://res.cloudinary.com/dbexeui7n/image/upload/v1669483701/Morgan-removebg-preview_xzl6ip.png"></img>
            </div>
            <nav className="buttons">
                <button>Tienda</button>
                <button>Nosotros</button>
                <button>Contacto</button>
            </nav>
            <CartWidget />
        </header>
    )
}

export default NavBar