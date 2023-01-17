import React from 'react'
import db from "./../../firebase/firebase"
import {
  collection,
  getDocs
} from 'firebase/firestore';
import Item from '../item/item';
import "./relationProducts.css"
import { useState, useEffect } from "react"
export default function RelationProducts(props) {
  const [product, setProduct] = useState([]);
  const clientsCollection = collection(db, 'productos');
  const {category} = props
  useEffect(() => {
    getDocs(clientsCollection)
    .then((querySnapshot) => {
        let clientsList = querySnapshot.docs.map(client => {
            return { ...client.data(), id: client.id }
        });
        clientsList = clientsList.filter(producto => producto.categoria == category  )
        clientsList = clientsList.slice(0,3)
        setProduct(clientsList)
    });
}, []);
  return (
    <div className='relationalProducts'>
        <div>
            <h2>Productos relacionados</h2>
        </div>
        <div className='products'>
            {
                product.map((producto) =>
                <Item element={producto} />
                )
            }
        </div>
    </div>
  )
}



