import React from "react";
import CartWidget from "./../cartWidget/CartWidget"
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./NavBar.css"
const NavBar = () =>
{
    return(
        <header>
            <div className="logo">
                <img src="https://res.cloudinary.com/dbexeui7n/image/upload/v1669483701/Morgan-removebg-preview_xzl6ip.png"></img>
            </div>
            <nav className="buttons">
                <Link to="/"><Button className="button-menu">Tienda</Button></Link> 
                <Button className="button-menu">Nosotros</Button>
                <Button className="button-menu">Contacto</Button>
            </nav>
            <CartWidget />
        </header>
    )
}

export default NavBar