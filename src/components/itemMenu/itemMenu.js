import React from "react";
import { Link } from "react-router-dom";
import "./itemMenu.css"


const itemMenu = () =>
{
    return (
        <div className="menu">
        <ul className="categoria">
            <li >
            <Link to={`/category/cpus`}><h4>Procesadores</h4></Link>
                
            </li>
            <li>
                <h4>Perifericos</h4>
            </li>
            <li>
            <Link to={`/category/gpus`}><h4 className="funcionando">Tarjetas Graficas</h4></Link>  
            </li>
            <li>
                <h4>Consolas</h4>
            </li>
            <li>
                <h4>Placas Madre</h4>
            </li>
            <li>
            <Link to={`/category/harddrive`}><h4 className="funcionando">Almacenamiento</h4></Link>
            </li>
            <li>
                <h4>Fuentes de poder</h4>
            </li>
            <li>
            <Link to={`/category/rams`}><h4 className="funcionando">Memorias Ram</h4></Link>
            </li>
        </ul>
    </div>
    )
}
export default itemMenu


