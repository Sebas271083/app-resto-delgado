import './App.css';
import ItemListContainer from './components/ItemLisContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Inicio from './components/Inicio/Inicio';
// import NavBar from './components/NavBar';
import NavBar2 from './components/NavBar/NavBar2';
import ContactoPage from './components/ContactoPage/ContactoPage';
import Nosotros from './components/Nosotros/Nosotros';
import {BrowserRouter, Routes, Route} from 'react-router-dom'



function App() {

  
  return (
    <BrowserRouter>
      <div className="">
        <NavBar2 />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path='/productos' element={<ItemListContainer />} />
          <Route path="/productos/:categoryId" element={<ItemDetailContainer />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/contacto" element={<ContactoPage />} />


        </Routes>
{/* 
          <ItemListContainer 
              greeting = "Nuestros Productos"
          /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
