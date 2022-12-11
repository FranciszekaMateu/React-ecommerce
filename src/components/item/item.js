import { Link } from "react-router-dom"
import "./item.css"
const Item =(element) =>
{
    console.log(element.element)
    return (
    <div className="card" >
        <img className="card-img-top" src={element.element.img} alt="Card image cap"/>
        <div className="card-body">
            <h5 className="card-title">{element.element.name}</h5>
            <p className="card-text">{element.element.name}</p>
            <Link to={`/itemDetail/${element.element.id}`}><button className="btn btn-primary">Ver mas</button></Link>
        </div>
    </div>
    )
}
export default Item