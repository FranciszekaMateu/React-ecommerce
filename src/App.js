import "./../node_modules/bootstrap/dist/css/bootstrap.min.css"
import React from 'react';
import ItemListContainer from "./components/itemListContainer/ItemListContainer";
import PrincipalDisplay from "./components/principalDisplay/PrincipalDisplay"
import ItemDetailContainer from './components/itemDetailContainer/itemDetailContainer';
import Cart from "./components/cart/Cart";
import NavBar from './components/navBar/NavBar';
import Provider from "./components/provider/provider";
import { BrowserRouter, Routes, Route } from "react-router-dom"
function App() {
  return (
    <>
      <Provider>
      <BrowserRouter>
      <NavBar/>

      <Routes>
      <Route path="/" element={<PrincipalDisplay />} />
      <Route path="/category/:categoryName" element={<PrincipalDisplay />} />
      <Route path="/category/:categoryName/:spec" element={<PrincipalDisplay />} />
      <Route path="/cart" element={ <Cart /> } />
      <Route path="/itemDetail/:id" element={ <ItemDetailContainer /> } />
      <Route path="*" element={ <h2>Esta url no existe</h2> } />
      </Routes>
      </BrowserRouter>
      </Provider>
    </>    
  );
}

export default App;
