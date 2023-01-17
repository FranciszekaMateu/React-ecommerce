import React from "react"
import ItemMenu from "../itemMenu/itemMenu"
import ItemListContainer from "../itemListContainer/ItemListContainer"
import "./principalDisplay.css"
import { useParams } from "react-router-dom"
import ItemDetail from "../itemDetail/itemDetail"
import CarouselSlider from "../carruselSlider/carruselSlider"
import Provider from "../provider/provider";
const PrincipalDisplay = (props) => {
    const { categoryName,spec } = useParams()
    const {item,id} = props
    return(
    <div className="background">
        <CarouselSlider/>
        <div className="principalContainer">
            <ItemMenu category={categoryName}/>
            {
                id === undefined ? <ItemListContainer categoryName={categoryName} spec={spec}/> : <ItemDetail item={item}/>
            }
        </div>
    </div>

    )
}
export default PrincipalDisplay