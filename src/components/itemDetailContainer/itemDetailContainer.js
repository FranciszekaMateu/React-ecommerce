import React, { useEffect, useState } from 'react'
import  products  from "../../productMock"
import { useParams } from "react-router-dom"
import ItemDetail from '../itemDetail/itemDetail.js'
const ItemDetailContainer = () => {

    const [product, setProduct] = useState({})
  
    const { id } = useParams()
  
    useEffect( ()=>{
      console.log(products)
      const productSelected = products.find( producto => parseInt(producto.id) === parseInt(id) )
      console.log(productSelected)
      setProduct(productSelected)
  
    }, [id])
    return (
      <div>
         <ItemDetail product={ product } />
      </div>
    )
  }
  export default ItemDetailContainer