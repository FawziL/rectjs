import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({name, img, price, description, año, stock}) =>{

    const handleOnAdd = (quantify) =>{
        console.log("Haz agregado " + quantify + " productos")}

    
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
            <ItemCount initial={1} stock={stock} onAdd={handleOnAdd}/>
        </div>
        
        
    </div>)
        
}
export default ItemDetail