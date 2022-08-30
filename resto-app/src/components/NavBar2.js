import React from 'react'
import CartWidget from '../CartWidget'

const NavBar2 = () => {
  return (
    <div className='bg-gray-700'>
        <h1 className='text-center text-white text-3xl mt-5 bg-gray-900'>RestoBar</h1>
        <img
        className="hidden lg:block h-8 ml-3 mb-3 w-auto rounded-full"
        src="/imagen/logo.jpg"
        alt="Logo"
    />
        <div className='bg-white flex justify-end'> <CartWidget /></div>

  

        <ul className='text-white flex justify-evenly p-2 ml-4' >
            <a href=""><li className='pl-3'>Inicio</li></a>
            <a href=""><li className='pl-3'>Nosotros</li></a>
            <a href=""><li className='pl-3'>Blog</li></a>
            <a href=""><li className='pl-3'>Contacto</li></a>
        </ul>
    </div>
  )
}

export default NavBar2