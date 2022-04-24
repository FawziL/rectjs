import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import CartContext from '../../Context/CartContext'

const ItemDetail = ({name, img, price, description, año, stock, id}) =>{
   
    const {addItem, isInCart} = useContext(CartContext)

    const handleOnAdd = (count) =>{
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
            {isInCart(id) ? <Link to='/cart'>Terminar compra</Link> : <ItemCount initial={1} stock={stock} onAdd={handleOnAdd}/>}
        </div>
        
        
    </div>)
        
}
export default ItemDetail