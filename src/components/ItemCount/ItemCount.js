import './ItemCount.css'
import {useState} from 'react'

const ItemCount = ({stock, onAdd}) =>{

    const [count, setCount] = useState(0)

    const restar = () =>{
        setCount(count - 1)
    }
    const sumar = () =>{
        if (count < stock ){
            setCount(count + 1)
        }
        
    }

    return(
        <div>
                <div className='flex'>
                    <button onClick={restar} className='botones'>-</button>
                    <p>{count}</p>
                    <button onClick={sumar} className='botones'>+</button>
                </div>

                <button onClick={() => onAdd(count)} className='botonAgregar'>Agregar al carrito</button>
        </div>
       
    )
}
export default ItemCount