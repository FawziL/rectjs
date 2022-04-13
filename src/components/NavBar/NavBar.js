import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import { Link, NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getCategories } from '../../stock'

const NavBar = () => {
    
    const [categories, setCategories] = useState([])

    useEffect(()=>{
        getCategories().then(categories=>{
            setCategories(categories)
        })
    }, [])

    return(
        <nav>
            <h1>Tutiendaonline</h1>
            <NavLink to='/' className={({isActive})=> isActive ? 'navRojo' : 'navVerde'}>List</NavLink>
            <NavLink to='/detail' className={({isActive})=> isActive ? 'navRojo' : 'navVerde'}>Detail</NavLink>
            { categories.map(cat=> <NavLink key={cat.id} to={`/category/${cat.id}`}
            className={({isActive})=> isActive ? 'navRojo' : 'navVerde'}
            >{cat.description}</NavLink>)}
            <CartWidget/>
        </nav>
    )
}


export default NavBar