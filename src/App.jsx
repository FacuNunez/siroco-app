// Importar React para tener todas las funcionalidades del framework
import React from "react";
import ItemListContainer from "./components/ItemListContainer";
import Navbar from "./components/Navbar";






// Crear mi componente funcional que se llama App
const App = () => {
  //const nombre = "Facundo";
  return (
    <div>
      <Navbar />
      <ItemListContainer greeting={"Bienvenidos a Siroco"}/>
    </div>
  );
};

export default App;
