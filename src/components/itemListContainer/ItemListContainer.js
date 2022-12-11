import React from "react"
import ItemMenu from "../itemMenu/itemMenu"
import { useState, useEffect } from "react"
import { useParams} from "react-router-dom"
import ItemList from "../itemList/itemList"
import  products  from "../../productMock"
const ItemListContainer = () =>
{
    const { categoryName } = useParams()
    const [items, setItems] = useState([])
    useEffect(() => {
        const productosFiltered = products.filter(
          (productos) => productos.category === categoryName
        )
    
        const task = new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve(categoryName ? productosFiltered : products)
          }, 500)
        })
     
        task
          .then((res) => {
            setItems(res)
          })
          .catch((err) => {
            console.log("se rechazo")
          })
    
      }, [categoryName])
    return(
        <div className="items-container">
            <ItemMenu category={categoryName}/>
            <ItemList items={items} />
        </div>
    )
}

export default ItemListContainer