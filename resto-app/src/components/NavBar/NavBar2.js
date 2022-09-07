import CartWidget from '../CartWidget/CartWidget'
import {NavLink} from 'react-router-dom'
import "./NavBar.css"



const NavBar2 = () => {

  return (
    <div className='bg-gray-700'>
        <h1 className='text-center text-white text-3xl mt-5 bg-gray-900'>Style Store</h1>
        <img
        className="hidden lg:block h-8 ml-3 mb-3 w-auto rounded-full"
        src="/imagen/logo.jpg"
        alt="Logo"
    />
        <div className='bg-white flex justify-end'> <CartWidget /></div>


        <ul className='text-white flex justify-evenly p-2 ml-4' >
            <NavLink className={({isActive}) => isActive && "clase1"} to="/">Inicio</NavLink>
            <NavLink className={({isActive}) => isActive && "clase1"} to="/productos">Productos</NavLink>
            <NavLink className={({isActive}) => isActive && "clase1"} to="/nosotros">Nosotros</NavLink>
            <NavLink className={({isActive}) => isActive && "clase1"} to="/Blog">Blog</NavLink>
            <NavLink className={({isActive}) => isActive && "clase1"} to="/contacto">Contacto</NavLink>            
        </ul>
    </div>
  )
}

export default NavBar2