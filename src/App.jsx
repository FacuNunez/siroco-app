// Importar React para tener todas las funcionalidades del framework
import React from "react";
import ItemList from "./components/ItemList";
import Navbar from "./components/Navbar";






// Crear mi componente funcional que se llama App
const App = () => {
  const nombre = "Facundo";
  return (
    <div>
      <Navbar />
      <ItemList />
    </div>
  );
};

export default App;
