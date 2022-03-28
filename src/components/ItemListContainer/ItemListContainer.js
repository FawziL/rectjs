import './ItemListContainer.css'


const ItemListContainer = (props) =>{
    console.log(props.greeting)
    return(
        <h1 className="ContenedorH1">{props.greeting}</h1>
    )
}
export default ItemListContainer