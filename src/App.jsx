import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { Notification, NotificactionProvider } from './notification/NotificationService';
import Login from './components/Login/Login';
import { AuthProvider } from './context/AuthContext';
import Cart from './components/Cart/Cart';
import Checkout from './components/CheckOut/Checkout';


const App = () => {
  return (
    <div className="App">
    <NotificactionProvider>
      <BrowserRouter>
        <AuthProvider>
          <CartProvider>
            <NavBar />
            <Routes>
              <Route path= '/' element= {<ItemListContainer greeting={"Bienvenidos!eleccione un servicio"}/>} />
              <Route path= '/category/:categoryId' element={<ItemListContainer greeting={"Servicios por categoría"}/>} />
              <Route path= '/item/:itemId' element={<ItemDetailContainer />} />
              <Route path= '/login' element={<Login />} />
              <Route path= '/cart' element={<Cart />} />
              <Route path= '/checkout' element={<Checkout />} />
            </Routes>
          </CartProvider>
        </AuthProvider>
      </BrowserRouter>
    </NotificactionProvider>
      
    </div>
  );
}

export default App;