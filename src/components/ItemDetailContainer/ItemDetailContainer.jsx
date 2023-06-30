import './ItemDetailContainer.css'
import { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import { getDoc, doc } from 'firebase/firestore'
import { db } from "../../services/Firebase/firebaseConfig"


const ItemDetailContainer = () => {
    const [service, setService]= useState()
    const [loading, setLoading] = useState()
    const { itemId } = useParams ()

    useEffect( () => {
        const serviceRef = doc(db, 'services', itemId)
        
        getDoc(serviceRef)
            .then(snapshot => {
                const data = snapshot.data()
                const serviceAdapted = { id: snapshot.id, ...data}
                setService(serviceAdapted)
            }) .catch(error => {
                console.log(error)
            })
    }, [itemId])

    if(loading) {
        return <h1>Cargando Servicios...</h1>
    }

    return (
        <div>
            <h1 className="service-detail-style">Detalle del servicio</h1>
            <ItemDetail {...service}/>
        </div>
        
    )
} 

export default ItemDetailContainer