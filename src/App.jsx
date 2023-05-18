import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar'

function App() {
  return (
    <div className="App">
     <NavBar />
     <ItemListContainer saludo={"Bienvenidos! Por favor seleccione un servicio"}/>
    </div>
  );
}

export default App;