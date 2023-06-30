import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import NavBar from '../components/NavBar/NavBar';
import Products from '../pages/Products';
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from '../components/ItemListContainer/ItemListContainer';
const MainRouter = () => {
  return (

    <BrowserRouter>
          <NavBar />
      <Routes>
        <Route exact path='*' element={<Home />} />
        <Route path= '/' element={<ItemListContainer greeting={"Bienvenidos! Por favor seleccione un servicio"}/>} />
        <Route path= '/category/:categoryId' element={<ItemListContainer greeting={"Servicios por categoría"}/>} />
        <Route path= '/item/:itemId' element={<ItemDetailContainer />} />
        <Route path='/products' element={<Products />} />

      </Routes>
    </BrowserRouter>)
}

export default MainRouter