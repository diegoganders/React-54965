import { useEffect, useState } from "react"
import { getServiceById } from "../AsyncMock"
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom"


const ItemDetailContainer = () => {
    const [service, setService]= useState()
    const [loading, setLoading] = useState(true)

    const { itemId } = useParams ()

    useEffect( () => {
        setLoading(true)
        getServiceById(itemId)
            .then(service => {
                setService(service)
            })
            .catch(error => {
                console.log(error)
            })
            .finally(() =>{
                setLoading(false)
            })
    }, [itemId])

    if(loading) {
        return <h1>Cargando Servicios...</h1>
    }

    return (
        <div>
            <h1>Detalle del servicio</h1>
            <ItemDetail {...service}/>
        </div>
        
    )
} 

export default ItemDetailContainer