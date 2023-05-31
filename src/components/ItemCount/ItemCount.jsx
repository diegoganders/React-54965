import './ItemCount.css'
import { useState } from "react"

const ItemCount = ({ stock = 15, initial = 1, onAdd }) => {
    const [quantity, setQuantity] = useState(initial)

    const decrement = () => {
        if(quantity > 1) {
            setQuantity(quantity - 1)
            console.log({quantity})
            console.log("Hola")
        }     
    }
    const increment = () => {
        if(quantity < stock) {
            setQuantity(quantity + 1)
        }
    }
    return (
        <div>
            <h4>{quantity}</h4>
            <button onClick={decrement} className="itemCount-button">-</button>
            <button onClick={increment} className="itemCount-button">+</button>
            <button onClick={() => onAdd(quantity)} disabled={ stock === 0} className="itemCount-button">Agregar al carrito</button>
        </div>
    )
}

export default ItemCount