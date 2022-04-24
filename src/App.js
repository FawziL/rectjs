import logo from './logo.svg';
import './App.css';
import Navbar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { CartContextProvider } from './Context/CartContext';
import Cart from './components/Cart/Cart';

function App() {
  
  return (
    <div className="App">
    <CartContextProvider>
        <BrowserRouter>
          <Navbar/>
            <Routes>
              <Route path='/' element={<ItemListContainer greeting={'Hola, este es el espacio para productos'}/>}/>
              <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
              <Route path='/detail/:productId' element={<ItemDetailContainer/>}/>
              <Route path='/cart' element={<Cart />} />
              <Route path='*' element={<h1>NOT FOUND</h1>}/>
            </Routes>
        </BrowserRouter>
      </CartContextProvider>

      <header className="App-header">
        
        
        <img src={logo} className="App-logo" alt="logo" />
        
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      
    </div>
  );
}

export default App;
