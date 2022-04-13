import './ItemListContainer.css'
import { useState, useEffect } from 'react'
import { getProductos } from '../../stock' 
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'









const ItemListContainer = (props) =>{

    
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const { categoryId } = useParams()

    useEffect(()=>{
        getProductos(categoryId).then(produc=>{
            setProductos(produc)
        }).catch(error => {
            console.log(error)
        })
        .finally(() => {
          setLoading(false)
      })
    }, [categoryId])



    
    return(
        <div className='ContenedorProductos'>

        { loading ? 
                <img src="https://cdn.dribbble.com/users/108183/screenshots/14420202/media/0398828bd84d67fad129e64e8a79f77c.gif" className="loadImg" alt="cargando"/> 
                :
                <div>
                    <h1>{props.greeting}</h1>
                    <ItemList productos={productos}/>
                </div>
                
           }
        
        </div>
        
      
    )
}
export default ItemListContainer