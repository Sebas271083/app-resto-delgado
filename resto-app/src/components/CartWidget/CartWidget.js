import React, {useContext} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  } from '@fortawesome/free-solid-svg-icons'
import {  } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'

<script src="https://kit.fontawesome.com/aa6dac5e14.js" crossorigin="anonymous"></script>


const CartWidget = () => {
  const {totalCart} = useContext(CartContext)
  const cantidadCarrito = totalCart()
  return (
    
    <>
      

      <Link to={'/cart'}>
        <div className='w-10  m-3'> 
          <img className='bg-white ' src="/imagen/cart-flatbed-solid.svg" alt="" />
        </div>
      </Link>
      <p className='bg-green-400 rounded-full h-min w-4 text-center font-bold text-white mr-3'>{cantidadCarrito}</p>
    </>
  )
}

export default CartWidget