import React from "react"
import ItemMenu from "../itemMenu/itemMenu"
import { useState, useEffect } from "react"
import { useParams} from "react-router-dom"
import ItemList from "../itemList/itemList"
import db from "../../firebase/firebase"
import { HashLoader } from "react-spinners"
import {
  collection,
  getDocs,
  query,
  where
} from 'firebase/firestore';
import  {obtener}  from "./../../firebase/firebase_functions.jsx"
import "./ItemListContainer.css"
const ItemListContainer = (props) =>
{
    const clientsCollection = collection(db, 'productos');
    const [isLoading,setLoading] = useState(true);
    const { categoryName,spec } = props
    const [items, setItems] = useState([])
    useEffect(() => {
      if (categoryName !== undefined) {
        if (spec !== undefined) {
          let q = query(query(clientsCollection,where("extra", "==",spec)),where("categoria", "==",categoryName))
          getDocs(q)
          .then((querySnapshot) => {
          let clientsList = [];
          clientsList = querySnapshot.docs.map(client => {
            let aux = {
              ...client.data(),
              id : client.id
            }
            return aux
          }
          )
          setItems(clientsList)
        })   
        }
        else
        {
          let q = query(clientsCollection,where("categoria", "==",categoryName))
          getDocs(q)
          .then((querySnapshot) => {
          let clientsList = [];
          clientsList = querySnapshot.docs.map(client => {
            let aux = {
              ...client.data(),
              id : client.id
            }
            return aux
          }
          )
          setItems(clientsList)
          })   
        }
      }
      else
        {
        getDocs(clientsCollection)
        .then((querySnapshot) => {
          let clientsList = [];
          clientsList = querySnapshot.docs.map(client => {
            let aux = {
              ...client.data(),
              id : client.id
            }
            return aux
          }
          )
          clientsList.splice(20,30)
          setItems(clientsList)
        })    
      }
     setTimeout(() => setLoading(false),2000)
    }, [categoryName,spec])
    return(
      <div className="itemsContainer">
         {
                isLoading ? <div className="loaderContainer"><HashLoader
                color="#F03C00"
                size={60}
              /></div> : <ItemList items={items} />
              }
      </div>     
    )
}

export default ItemListContainer