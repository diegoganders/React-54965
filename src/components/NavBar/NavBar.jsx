import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'
import { Link, NavLink } from 'react-router-dom'


const NavBar = () => {
    return (
        <nav className="NavBar">
            <Link to='/' className="Brand">Diego Anders</Link>
            
                <NavLink to='/category/WebDesign' className='btn btn-dark'>Web Design</NavLink>
                <NavLink to='/category/DigitalMarketing' className='btn btn-dark'>Digital Marketing</NavLink>
                <NavLink to='/category/WebDevelopment' className='btn btn-dark'>Web Development</NavLink>
                <NavLink to='/category/WebsiteMaintenance' className='btn btn-dark'>Website Maintenance</NavLink>
                <NavLink to='/category/SecurityAuditing' className='btn btn-dark'>Security Auditing</NavLink>
        
            <CartWidget />
        </nav>
    )
}

export default NavBar