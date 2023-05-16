import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'

const NavBar = () => {
    return (
        <nav className="NavBar ">
            <h1>Servicios Profesionales</h1>
            <div>
                <button className='btn btn-dark'>Diseño web</button>
                <button className='btn btn-dark'>Ossint</button>
                <button className='btn btn-dark'>Desarrollo web</button>
                <button className='btn btn-dark'>Consultoría de TI</button>
                <button className='btn btn-dark'>Auditoría de Segurid</button>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar