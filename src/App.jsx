import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import NavBar from './components/navbar/navbar';
import ItemListContainer from './components/itemListContainer';
import CartContextProvider from './context/cartContext';
import ItemDetailContainer from './components/itemDetailContainer';
import Cart from './components/cart/cart';


function App() {
  
  return (
    <BrowserRouter>
      <CartContextProvider>
        <div className="App">
          <NavBar/>
          <Routes>
            <Route exact path='/' element={<ItemListContainer/>} />
            <Route exact path='/cat/:itemCategory' element={<ItemListContainer/>} />
            <Route exact path='/cat/:itemCategory/:itemSubcategory' element={<ItemListContainer/>} />
            <Route exact path='/detalle/:itemId' element={<ItemDetailContainer/>} />
            <Route exact path='/cart' element={<Cart/>} />
          </Routes> 
        </div>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
