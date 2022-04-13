import './ItemListContainer.css'
import ItemCount from '../ItemCount/ItemCount'
import { useState, useEffect } from 'react'
import { getProductos } from '../../stock' 
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'









const ItemListContainer = (props) =>{

    const [productos, setProductos] = useState([])
    
    const { categoryId } = useParams()

    useEffect(()=>{
        getProductos(categoryId).then(produc=>{
            setProductos(produc)
        })
    }, [categoryId])


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