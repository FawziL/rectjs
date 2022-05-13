import './Home.css'
import { Link } from 'react-router-dom'


const Home = () => {

   

    return (
        <div className='Home'>
            <div className='flex'>  
                <h1>Hola</h1>
            </div>
            
            <Link to='/productos'><button className='linkProductos'>Buscar productos</button></Link>
        </div>
    )
}

export default Home