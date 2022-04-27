import './ItemListContainer.css'
import { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { firestoreDb } from '../../services/firebase'









const ItemListContainer = (props) =>{

    const [productos, setProductos] = useState([])
    const { categoryId } = useParams()

    useEffect(()=>{

        const collectionRef = categoryId
        ? query(collection(firestoreDb, 'products'), where('category', '==', categoryId))
        : collection(firestoreDb, 'products')

        getDocs(collectionRef).then(response =>{
            const products = response.docs.map(doc=> {
                return {id: doc.id, ...doc.data()}
            })
            setProductos(products)
        })
    }, [categoryId])



    
    return(
        <div className='ContenedorProductos'>

        { 
                <div>
                    <h1>{props.greeting}</h1>
                    <ItemList productos={productos}/>
                </div>
                
           }
        
        </div>
        
      
    )
}
export default ItemListContainer