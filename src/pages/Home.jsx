import React from 'react'
import '../App.css';
import ItemListContainer from '../components/ItemListContainer/ItemListContainer';


const home = () => {
  return (
    <div className="App">
    <ItemListContainer saludo={"Bienvenidos! Por favor seleccione un servicio"}/>

   </div>
  )
}

export default home