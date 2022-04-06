import Item from '../Item/Item'


const ItemList = ({productos}) =>{
    return(
    <div className="flex">
        {productos.map(producs => <Item key={producs.id}{...producs} />)}
    </div>)
        
}
export default ItemList