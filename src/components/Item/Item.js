import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({id, name, img, price}) =>{
    return(
    <div className='cards'>
        <h3>{name}</h3>
        <div>
        <img src={img} className='imgProduct'></img>
        </div>
        <p className='precio'>{price}$</p>
        <Link to={`/detail/${id}`} className='buttonProduct'>Ver detalles</Link>
        
    </div>)
        
}
export default Item