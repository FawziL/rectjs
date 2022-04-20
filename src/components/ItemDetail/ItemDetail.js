import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import CardContext from '../../Context/CardContext'

const ItemDetail = ({name, img, price, description, año, stock, id}) =>{

    const [quantity, setQuantity] = useState(0)
   
    const {addItem, removeItem, isInCart} = useContext(CardContext)

    const handleOnAdd = (count) =>{
        setQuantity(count)

        const productObj = {
            id, name, price
        }
        addItem({...productObj, quantity: count})
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
            {isInCart(id) ? <Link to='/card'>Ir al carrito</Link> : <ItemCount initial={0} stock={stock} onAdd={handleOnAdd}/>}
        </div>
        
        
    </div>)
        
}
export default ItemDetail