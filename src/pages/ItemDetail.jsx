const ItemDetail = ({ name, price, img, description}) => {
    return (
        <div style={{background: '#A312F1', margin: 10}}>
            <h2>{name}</h2>
            <img src={img} alt={name} style={{ width: 500}}/>
            <h3>Precio: {price}</h3>
            <p>Descripcion: {description}</p>
            <button className="Boton-Agregar">Agregar al Carrito</button>


        </div>
    )
}

export default ItemDetail