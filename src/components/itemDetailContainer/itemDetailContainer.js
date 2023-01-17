import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import PrincipalDisplay from '../principalDisplay/PrincipalDisplay'
import db from "./../../firebase/firebase"
import {
  collection,
  getDocs
} from 'firebase/firestore';
const ItemDetailContainer = () => {
  const [product, setProduct] = useState([]);
  const clientsCollection = collection(db, 'productos');
  const { id } = useParams();
  useEffect(() => {
    getDocs(clientsCollection)
    .then((querySnapshot) => {
        let clientsList = querySnapshot.docs.map(client => {
            return { ...client.data(), id: client.id }
        });
        clientsList = clientsList.find(producto => producto.id === id  )
        setProduct(clientsList)
    });
}, [id]);
  return (
      <PrincipalDisplay id={id} item={product}/>
  ) 
}
  export default ItemDetailContainer