import CartWidget from '../CartWidget/CartWidget'
import {Link, NavLink, useSearchParams} from 'react-router-dom'
import "./NavBar.css"




const NavBar2 = () => {

  const [searchParams, setSearchParams] = useSearchParams()


  let categoria = searchParams.get('categoria') ?? "";

  console.log("categoria" + categoria)

  const handleFilter = (e) => {
    console.log(e.target.value)
    setSearchParams({categoria: e.target.value})
  }
  console.log("category " + categoria)


  return (
    <div className='bg-gray-700'>
        <h1 className='text-center text-white text-3xl mt-5 bg-gray-900 '><Link to={`/`}>Style Store </Link></h1>
        <img
        className="hidden lg:block h-8 ml-3 mb-3 w-auto rounded-full"
        src="/imagen/logo.jpg"
        alt="Logo"
    />
        <div className='bg-white flex justify-end'>
           <CartWidget />
        </div>


        <ul className='text-white flex justify-evenly p-2 ml-4' >
            <NavLink className={({isActive}) => isActive && "clase1"} to="/">Inicio</NavLink>
            <NavLink className={({isActive}) => isActive && "clase2"} to="/productos">
              
              <select onChange={handleFilter} className='text-#fff bg-gray-700 text-center cursor-pointer'>
                <option value={""}>Productos</option>
                <option value={"men's clothing"}>Ropa Hombre</option>
                <option value={"women's clothing"}>Ropa Mujer</option>
                <option value={"electronics"}>Electronica</option>
                <option value={"jewelery"}>Joyas</option>
              </select>
            </NavLink>
            <NavLink className={({isActive}) => isActive && "clase1"} to="/nosotros">Nosotros</NavLink>
            <NavLink className={({isActive}) => isActive && "clase1"} to="/Blog">Blog</NavLink>
            <NavLink className={({isActive}) => isActive && "clase1"} to="/contacto">Contacto</NavLink>            
        </ul>
    </div>
  )
}

export default NavBar2