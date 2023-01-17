import db from "./firebase.js"
import {
  collection,
  getDocs,
} from 'firebase/firestore';
const clientsCollection = collection(db, 'productos');
const obtener = () => getDocs(clientsCollection)
      .then((querySnapshot) => {
          const clientsList = [];
          querySnapshot.forEach((client) => {
            clientsList.push(client.data());
          })
        return clientsList;
      })
export {obtener};