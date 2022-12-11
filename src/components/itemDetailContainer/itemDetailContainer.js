import React, { useEffect, useState } from 'react'
import  products  from "../../productMock"
import { useParams } from "react-router-dom"
import ItemDetail from '../itemDetail/itemDetail.js'
const ItemDetailContainer = () => {

    const [product, setProduct] = useState({})
  
    const { id } = useParams()
  
    useEffect( ()=>{
  
      const productSelected = products.find( producto => producto.id === parseInt(id) )
      setProduct(productSelected)
  
    }, [id])
  
    return (
      <div>
         <ItemDetail product={ products } />
      </div>
    )
  }
  export default ItemDetailContainer