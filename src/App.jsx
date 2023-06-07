import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'; 
import NavBar from './components/NavBar/NavBar'
import ItemDetailContainer from './pages/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MainRouter from './router/MainRouter';
function App() {
  return (
    <div className="App">

<MainRouter />

{/* <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path= '/' element={<ItemListContainer greeting={"Bienvenidos! Por favor seleccione un servicio"}/>} />
          <Route path= '/category/:categoryId' element={<ItemListContainer greeting={"Servicios por categoría"}/>} />
          <Route path= '/item/:itemId' element={<ItemDetailContainer />} />
        </Routes>
     </BrowserRouter> */}
    </div>
  );
}

export default App;