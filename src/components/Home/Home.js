import './Home.css'
import { Link } from 'react-router-dom'


const Home = () => {

   

    return (
        <div className='Home'>

            <div className='flex'>  
                <h1>Bienvenidos!</h1>
            </div>
            <div className='flex'>  
                <h2 className='color'>Somos una tienda de repuestos de automóviles!</h2>
            </div>
            <div  className='flex'>   
                <div  className='color'>   
                    <h3>Te invitamos a que consultes nuestro catálogo!</h3>
                    <Link to='/productos'><button className='linkProductos'>Consultar productos...</button></Link>
                </div>
            </div>
            
            
            
        </div>
    )
}

export default Home