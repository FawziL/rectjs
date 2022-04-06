import './Item.css'

const Item = ({name, img, price}) =>{
    return(
    <div className='cards'>
        <h3>{name}</h3>
        <div>
        <img src={img} className='imgProduct'></img>
        </div>
        <p>{price}$</p>
        <button className='buttonProduct'>Ver detalles</button>
        
    </div>)
        
}
export default Item