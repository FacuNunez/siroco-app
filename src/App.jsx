// Importar React para tener todas las funcionalidades del framework
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import ItemListContainer from "./components/ItemListContainer";
import Navbar from "./components/Navbar";
import Home from "./pages/home";
import Products from "./pages/products";
import Details from "./pages/details";





// Crear mi componente funcional que se llama App
function App () {
  //const nombre = "Facundo";
  return (
    <BrowserRouter>
      <Navbar />
      <ItemListContainer greeting={"Bienvenidos a Siroco"}/>
      <Routes>
        <Route exact path="/" element ={<Home/>}/>
        <Route path="/products" element ={<Products/>}/>
        <Route path="/products/:name" element ={<Details/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
