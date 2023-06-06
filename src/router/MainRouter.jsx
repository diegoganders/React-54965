import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import NavBar from '../components/NavBar/NavBar';
import Products from '../pages/Products';
const MainRouter = () => {
  return (

    <BrowserRouter>
          <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />

      </Routes>
    </BrowserRouter>)
}

export default MainRouter