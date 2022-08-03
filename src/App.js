
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import ContactPage from './pages/ContactPage';
import Cart from './components/Cart/Cart';
import {CartContextProvider} from './components/context/CartContext';
function App() {

  const stylesH1={color:'blue',}
  return (
    <div className="App">
      <header className="App-header">
      </header>
        <CartContextProvider>
        <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route path='/' element={<ItemListContainer greeting="Puedes comprar todo tipo de bolsas"/>}/>
            <Route path='/category/:categoryId' element={<ItemListContainer greeting="Categorías de productos"/>}/>
            <Route path='/detalle/:itemId' element={<ItemDetailContainer itemId={1} greeting="Detalle de un producto" />}/>
            <Route path='/contact' element={<ContactPage/>} />
            <Route path='/cart' element={<Cart/>}/>
          </Routes>
        </BrowserRouter>
        <p style={{marginTop: "12px"}}>Agustin Fassola</p> 
        </CartContextProvider>
    </div>
  );
}

export default App;
