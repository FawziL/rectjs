import { createContext, useState } from "react";

    const CardContext = createContext()

    export const CardContextProvider = ({children}) => {

    const [cart, setCart] = useState([])
    console.log(cart)

    const addItem = (productoToAdd) => {
        setCart([...cart, productoToAdd])
    }

    const removeItem = (id) => {
        const products = cart.filter(prod=> prod.id !== id)
        setCart(products)
    }
    const isInCart = (id) => {
        return cart.some(prod => prod.id === id )
    }
    const clearCart = () => {
        setCart([])
    }

    const getQuantity = () =>{
        let count = 0
        cart.forEach(prod =>{
            count += prod.quantity
        })
        return count
    }


    return(
        <CardContext.Provider value={{cart, addItem, getQuantity, removeItem, clearCart, isInCart}}>
            {children}
        </CardContext.Provider>
    )
}
export default CardContext