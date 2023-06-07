import { Link } from "react-router-dom"

const Item = ({ id, name, price }) => {
    return (
        <div style={{background: '#A312F1', margin: 10}}>
            <h2>{name}</h2>
            <h3>Precio: {price}</h3>
            <Link to={`/item/${id}`} style={{ background: 'black', color: 'white'}}>Ver Detalle</Link>
        </div>
    )
}

export default Item