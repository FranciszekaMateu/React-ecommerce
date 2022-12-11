import React from 'react';
import NavBar from './components/navBar/NavBar';
import ItemListContainer from "./components/itemListContainer/ItemListContainer";
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css"
import ItemDetailContainer from './components/itemDetailContainer/itemDetailContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom"
function App() {
  return (
    <>
      <BrowserRouter>
      <NavBar />
      <Routes>

      <Route path="/" element={<ItemListContainer />} />

      <Route path="/category/:categoryName" element={<ItemListContainer />} />

      <Route path="/itemDetail/:id" element={ <ItemDetailContainer /> } />

      <Route path="*" element={ <h2>Esta url no existe</h2> } />

      </Routes>
      </BrowserRouter>
    </>    
  );
}

export default App;
