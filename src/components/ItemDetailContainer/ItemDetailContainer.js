
import { useState, useEffect } from 'react'
import { getProductosById } from '../../stock'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'

import './ItemDetailContainer.css'


const ItemDetailContainer = () =>{

    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(true)

const { productId } = useParams()

    useEffect(() => {
        getProductosById(productId).then(item => {
            setProduct(item)          
        }).catch(err  => {
            console.log(err)
        }).finally(() => {
            setLoading(false)
        })

        return (() => {
            setProduct()
        })

    }, [productId])

    
    return(
        <div className='DetailsProductos'>
           { 
            loading ? 
                <h1>Cargando...</h1> :
            product ? 
                <ItemDetail  {...product} /> :
                <h1>El producto no existe</h1> 
            }
        </div>
        
      
    )
}
export default ItemDetailContainer