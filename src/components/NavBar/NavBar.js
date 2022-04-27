import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import { NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { firestoreDb } from '../../services/firebase'
import { getDocs, collection } from 'firebase/firestore'

const NavBar = () => {
    
    const [categories, setCategories] = useState([])

    useEffect(()=>{
        getDocs(collection(firestoreDb, 'category')).then(response =>{
          const category = response.docs.map(doc => {
              return {id: doc.id, ...doc.data()}
          })  
          setCategories(category)
        })
    }, [])

    return(
        <nav>
            
            <NavLink to='/' className="logo"><h1>Tutiendaonline</h1></NavLink>
            { categories.map(cat=> <NavLink key={cat.id} to={`/category/${cat.id}`}
            className={({isActive})=> isActive ? 'navRojo' : 'navVerde'}
            >{cat.description}</NavLink>)}
            <CartWidget/>
        </nav>
    )
}


export default NavBar