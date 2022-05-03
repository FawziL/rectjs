import './Cart.css'
import { useContext } from "react"
import CartContext from "../../Context/CartContext"
import { Link } from 'react-router-dom'

const Cart = () => {

    const { cart, removeItem, clearCart, getTotal } = useContext(CartContext)
    
    if(cart.length === 0) {
        return (
            <div className='contenedorCompras'>
                <h1 className='noMargin'>No hay productos en el carrito</h1>
                <Link to='/'><button className='Link'>Buscar otros productos</button></Link>
            </div>
        )
    }

    return (
        <div className='contenedorCompras'>
            <h1 className='noMargin'>Carrito de compras</h1>
            <hr/>
            <div  className='flex'>
                {cart.map(prod => 
                <div className="productosCarrito" key={prod.id}> <p className='titulo'>{prod.name}</p>
                <div>Cantidad: {prod.quantity}</div> <div>Precio uni: {prod.price}</div> <div>Subtotal: {prod.quantity * prod.price} </div>
                <div><button className='botonEliminarProducto' onClick={() => removeItem(prod.id)}>Quitar producto</button></div>
                </div>)}   
            </div>
            <p>El monto total es de: {getTotal()}$</p>
            <div className='margin'><button onClick={clearCart} className='botonEliminarProducto'>Vaciar carrito</button></div>
            <Link to='/checkout'>Terminar compra</Link>
        </div>
    )
}

export default Cart