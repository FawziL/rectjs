import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
    return(
        <nav>
            <h1>Tutiendaonline</h1>
            <button>Ford</button>
            <button>Renault</button>
            <button>Volkswagen</button>
            <button>Honda</button>
            <button>Hyundai</button>
            <button>Mitsubishi</button>
            <CartWidget/>
        </nav>
    )
}


export default NavBar