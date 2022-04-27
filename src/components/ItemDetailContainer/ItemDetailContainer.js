import { useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { getDoc, doc } from 'firebase/firestore'
import { firestoreDb } from '../../services/firebase'
import './ItemDetailContainer.css'


const ItemDetailContainer = () =>{

    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(false)
    const { productId } = useParams()

    useEffect(() => {
        getDoc(doc(firestoreDb, 'products', productId)).then(response =>{
            const product = {id: response.id, ...response.data()}
            setProduct(product)
        })
        setProduct()

        return (() => {
            setProduct()
        })

    }, [productId])

    
    return(
        <div className='DetailsProductos'>
           { 
            loading ? 
            <img src="https://cdn.dribbble.com/users/108183/screenshots/14420202/media/0398828bd84d67fad129e64e8a79f77c.gif" className="loadImg" alt="cargando"/> 
            :
            product ? 
                <ItemDetail  {...product} /> :
                <h1>Cargando...</h1> 
            }
        </div>
        
        
    )
}
export default ItemDetailContainer