import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const ItemDetail = ({name, img, price, description, año, stock}) =>{

    const [quantity, setQuantity] = useState(0)
   

    const handleOnAdd = (count) =>{
        setQuantity(count)
        if(count === 0){
            console.log("No hay productos en el carrito")
        }
    }

    
    return(
    <div className='CardDetail'>

        <div>
            <img src={img} className='imgProductDetail'></img>
        </div>
        <div className='detalles'>
            <h3>{name}</h3>
            <p>Año: {año}</p>
            <p>Precio: {price}$</p>
            <p>Detalles: {description}</p>
            <p>Stock: {stock}</p>
            {quantity > 0 ? <Link to='/card'>Ir al carrito</Link> : <ItemCount initial={0} stock={stock} onAdd={handleOnAdd}/>}
        </div>
        
        
    </div>)
        
}
export default ItemDetail