import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar'
import ItemCount from './components/ItemCount/ItemCount';
function App() {
  return (
    <div className="App">
     <NavBar />
     <ItemListContainer saludo={"Bienvenidos! Por favor seleccione un servicio"}/>
     <ItemCount/>

    </div>
  );
}

export default App;