import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  } from '@fortawesome/free-solid-svg-icons'
import {  } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'
<script src="https://kit.fontawesome.com/aa6dac5e14.js" crossorigin="anonymous"></script>

const CartWidget = () => {
  return (
    <Link to={'/cart'}>
      <div className='w-10  m-3'> 
        <img className='bg-white ' src="/imagen/cart-flatbed-solid.svg" alt="" />
      </div>
    </Link>
  )
}

export default CartWidget