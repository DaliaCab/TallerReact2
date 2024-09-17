import React, { useState } from "react";
//import Saludo from "./ejercicios";
//import Producto from "./ejercicios";
import ContadorFuncional, {ContadorClase} from "./ejercicios";
import ListaDeProductos from "./ejercicios";
import DetalleProducto from "./ejercicios";

//Parte 1: Creación de Componentes********************************************************
// function App() {
//   return (
//     <div>
//       <Saludo name = "Dalia"/>
//     </div>
//   );
// }

// export default App;

//Parte 2: Uso de Props*********************************************************************
// function App() {
//   return (
//     <div>
//       <Producto nombreProducto = "papa" precio = "5000"/>
//       <Producto nombreProducto = "tomate" precio = "3000"/>
//     </div>
//   );
// }

// export default App;

//Parte 3: Componentes Funcionales vs. Componentes de Clase**************************************************
// function App() {

//   return (
//       <div>
//           <h2>Contador Funcional:</h2>
//           <ContadorFuncional/>

//           <h2>Contador de clase:</h2>
//           <ContadorClase/>
//       </div>
//   );
// }

// export default App;
//Parte 4: Ejercicio Final*******************************************************************************
// function App(){
//   const productos = [  //Arreglo con nombre y precio
//     {nombreProducto: "papa", precio:"5000"},
//     {nombreProducto: "tomate", precio:"3000"},
//     {nombreProducto: "lechuga", precio:"2000"}
//   ];


//   return(
//     <div>
//       <h1>Lista de Productos</h1>
//       <ListaDeProductos productos={productos}/>
//     </div>
//   )
// }

// export default App;
//Parte 5: Ejercicio Extra - Componente DetalleProducto (Sin Estado ni Botón)*************************************
function App(){
  return(
    <div>
      <h1>Productos con sus detalles</h1>
      <DetalleProducto
      nombre="papa"
      precio="5000 $"
      descripcion="Bolsa con un kilo de papa lavada"
      />
    </div>
  )
}
export default App;