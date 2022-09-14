import React, {useContext} from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from "react-router-dom"



const CartContainer = () => {
    const {productCartList, removeItem, clear} = useContext(CartContext)


  return (
    <div>
        <h1 className='text-center text-4xl mb-10 mt-10 font-bold'>Tu Carrito</h1>
        <button className='bg-red-600 w-64 ml-auto' onClick={clear}>Vaciar Carrito</button>
        <div className=''>
            {productCartList.map(item => (
              <>
                <div className='flex items-center m-4'>
                  <Link to={`/productos/${item.id}`}>
                    <h3 className='font-bold mb-3'>{item.title}</h3>
                  </Link>  
                      <img className='mb-3 m-4 flex justify-center items-center' src={item.image} style={{width:"5%"}} alt="imagen"/>
                      <p className='mb-2 m-4'>Precio: $ {item.price}</p>
                      <p>cantidad: {item.quantity}</p>
                      <button className='mb-6 m-4' style={{backgroundColor:"red", width:"100px", borderRadius:"10px"}} onClick={() => removeItem(item.id)}>Elimnar Registro</button>
                </div>
              </>
))}
        </div>

    </div>
  )
}

export default CartContainer