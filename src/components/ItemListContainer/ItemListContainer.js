import './ItemListContainer.css'
import ItemCount from '../ItemCount/ItemCount'

const ItemListContainer = (props) =>{

    const handleOnAdd = (quantify) =>{
        console.log("Haz agregado " + quantify + " productos")}

    
    return(
        <div>
        <h1 className="ContenedorH1">{props.greeting}</h1>
        <ItemCount stock={10} onAdd={handleOnAdd}/>
        </div>
        
      
    )
}
export default ItemListContainer