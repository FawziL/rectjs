import './ItemListContainer.css'
import ItemCount from '../ItemCount/ItemCount'
import { useState, useEffect } from 'react'
import { getProductos } from '../../stock' 
import ItemList from '../ItemList/ItemList'

const ItemListContainer = (props) =>{

    const [productos, setProductos] = useState([])

    useEffect(()=>{
        getProductos().then(produc=>{
            setProductos(produc)
        })
    }, [])


    const handleOnAdd = (quantify) =>{
        console.log("Haz agregado " + quantify + " productos")}

    
    
    return(
        <div className='ContenedorProductos'>
        <h1>{props.greeting}</h1>
        <ItemList productos={productos}/>
        <ItemCount initial={1} stock={10} onAdd={handleOnAdd}/>
        </div>
        
      
    )
}
export default ItemListContainer