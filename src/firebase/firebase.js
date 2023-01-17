// Import the functions you need from the SDKs you need
import  {initializeApp}  from "firebase/app";
import  {getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDirNjlq8hELCcLJVxfHhTNHOdBakHf3u4",
  authDomain: "react-ecomerce-a6508.firebaseapp.com",
  projectId: "react-ecomerce-a6508",
  storageBucket: "react-ecomerce-a6508.appspot.com",
  messagingSenderId: "956124243552",
  appId: "1:956124243552:web:615bcbba04ad44a3360505"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db