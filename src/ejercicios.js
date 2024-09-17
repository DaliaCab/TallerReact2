//import React, { useState } from "react";

import { useState } from "react";

//Parte 1: Creación de Componentes********************************************************

// function Saludo(props) {
//   return (
//     <div>
//       <p>Hola! {props.name} :D</p>
//     </div>
//   );
// }

// export default Saludo;


//Parte 2: Uso de Props*********************************************************************

function Producto(props){
    return(
        <div>
           <h2>Producto: {props.nombreProducto}</h2> 
           <h3>Precio: {props.precio}$</h3>
        </div>
    )
}
//export default Producto;



//Parte 3: Componentes Funcionales vs. Componentes de Clase**************************************************

// import React, { useState, Component } from "react";
// //COMPONENTE FUNCIONAL
// function ContadorFuncional(){
//     const [num, setNum] = useState(0); 
//     return(
//         <div>
//            <button onClick={() => setNum (num+1)}>Incrementar</button>
//            <p>Contador: {num}</p>
//         </div>
//     )
// }
// export default ContadorFuncional;

// //COMPONENTE DE CLASE
// export class ContadorClase extends React.Component{
//     constructor(props){
//         super(props)
//         this.state = {num: 0};
//     }

//     incrementar = ()=>{
//         this.setState({num: this.state.num +1});
//     }

//     render() {
//         return (
//           <div>
//             <button onClick={this.incrementar}>Incrementar</button>
//             <p>Contador: {this.state.num}</p>
//           </div>
//         );
//       }
// }


//Parte 4: Ejercicio Final***********************************************************************

// function ListaDeProductos({productos}){
//     return(
//         <div>{productos.map((producto, index)=> (
//             <Producto
//             key={index} nombreProducto={producto.nombreProducto} precio={producto.precio}
//             />
//         ))}</div>
//     )
// }
// export default ListaDeProductos;

//Parte 5: Ejercicio Extra - Componente DetalleProducto (Sin Estado ni Botón)***********************************************************************
function DetalleProducto (props){
    return(
        <div>
            <h2>Producto: {props.nombre}</h2>
            <p>Precio: {props.precio}</p>
            <p>Descripcion: {props.descripcion}</p>
        </div>
    )
}

export default DetalleProducto