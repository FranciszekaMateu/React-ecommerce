import React from "react";
import "./itemMenu.css"


const itemMenu = () =>
{
    return (
        <div className="menu">
        <ul className="categoria">
            <li >
                <h4>Procesadores</h4>
            </li>
            <li>
                <h4>Perifericos</h4>   
            </li>
            <li>
                <h4>Tarjetas Graficas</h4>  
            </li>
            <li>
                <h4>Consolas</h4>
            </li>
            <li>
                <h4>Placas Madre</h4>
            </li>
            <li>
                <h4>Almacenamiento</h4>
            </li>
            <li>
                <h4>Fuentes de poder</h4>
            </li>
            <li>
                <h4>Memorias Ram</h4>
            </li>
        </ul>
    </div>
    )
}
export default itemMenu


