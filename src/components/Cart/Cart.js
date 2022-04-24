import './Cart.css'
import { useContext } from "react"
import CartContext from "../../Context/CartContext"
import { Link } from 'react-router-dom'

const Cart = () => {

    const { cart, removeItem } = useContext(CartContext)
    
    if(cart.length === 0) {
        return (
            <div>
                <h1>No hay productos en el carrito</h1>
                <Link to='/'><button className='Link'>Buscar otros productos</button></Link>
            </div>
        )
    }

    return (
        <div>
        <h1>Carrito de compras</h1>
        <hr/>
        <div  className='flex'>
            {cart.map(prod => 
            <div className="productosCarrito" key={prod.id}> <p className='titulo'>{prod.name}</p>
            <div>Cantidad: {prod.quantity}</div> <div>Precio uni: {prod.price}</div> <div>Subtotal: {prod.quantity * prod.price} </div>
            <div><button className='botonEliminarProducto' onClick={() => removeItem(prod.id)}>Quitar producto</button></div>
             </div>)}   
        </div>
        </div>
    )
}

export default Cart