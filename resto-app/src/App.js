import ItemListContainer from './components/ItemLisContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Inicio from './components/Inicio/Inicio';
// import NavBar from './components/NavBar';
import NavBar2 from './components/NavBar/NavBar2';
import ContactoPage from './components/ContactoPage/ContactoPage';
import Nosotros from './components/Nosotros/Nosotros';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { CartProvider } from './context/CartContext';
import CartContainer from './components/CartContainer/CartContainer';
import Footer from './components/Footer/Footer';



function App() {

  
  return (
    <CartProvider>
      <BrowserRouter>
        <div className="">
          <NavBar2 />
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path='/productos' element={<ItemListContainer />} />
            <Route path="/productos/:categoryId" element={<ItemDetailContainer />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/contacto" element={<ContactoPage />} />
            <Route path='/cart' element={<CartContainer />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
