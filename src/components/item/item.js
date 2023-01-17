import { Link } from "react-router-dom"
import "./item.css"
import { Button } from "react-bootstrap"
const Item =(element) =>
{
    return (
    <div className="card" >
        <img className="card-img-top" src={element.element.link_foto} alt="Card image cap"/>
        <div className="card-body">
            <h5 className="card-title">{element.element.nombre}</h5>
            <strong><p className="card-text"> US$ {element.element.precio}</p></strong> 
            <Link to={`/itemDetail/${element.element.id}`}><Button className="button-card">Ver mas</Button></Link>
        </div>
    </div>
    )
}
export default Item