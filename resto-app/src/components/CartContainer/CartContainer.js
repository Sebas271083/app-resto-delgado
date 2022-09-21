import React, {useContext, useEffect, useState} from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from "react-router-dom"



const CartContainer = () => {
    const {productCartList, removeItem, clear, totalCart, totalPrecio} = useContext(CartContext)
    const cantidadCarrito = totalCart()
    const totalAPagar = totalPrecio()
    console.log(totalAPagar)
    console.log(cantidadCarrito)

  return (
    <div>
        <h1 className='text-center text-4xl mb-10 mt-10 font-bold'>Tu Carrito</h1>
        {cantidadCarrito === "No hay productos agregados al carrito" ? <div className='flex justify-center text-center'><p className='ml-4'>{cantidadCarrito} <Link to={`/productos`}><p> <span className='font-bold mt-2 text-lg'>Volver</span> a los productos </p></Link></p></div> : ""}
        <button className='bg-red-600 w-64 ml-auto mr-4' onClick={clear}>Vaciar Carrito</button>
        <div className='md:flex sm:flex'>
        <div className=' bg-gray-200 mr-4 ml-4'>
            {productCartList.map(item => (
              <>
                <div className='sm:flex items-center m-4'>
                  <Link to={`/productos/${item.id}`}>
                    <h3 className='font-bold mb-3' style={{maxWidth: "250px"}}>{item.title}</h3>
                  </Link>  
                      <img className='mb-3 m-4 flex justify-center items-center' src={item.image} style={{width:"5%"}} alt="imagen"/>
                      <p className='mb-2 m-4' style={{maxWidth: "80px"}}>Precio: $ {item.price}</p>
                      <p>cantidad: {item.quantity} </p>
                      <button style={{backgroundColor:"green", width:"4px", height:"2px",borderRadius:"5px", margin:"3px", marginLeft:"20px"}}>+</button>
                      <button style={{backgroundColor:"brown", width:"4px", height:"2px",borderRadius:"5px", margin:"3px", marginLeft:"20px"}}>-</button>
                      <button className='mb-6 m-4' style={{backgroundColor:"red", width:"100px", borderRadius:"10px"}} onClick={() => removeItem(item.id)}>Elimnar Registro</button>
                </div>
              </>
))}

        </div>
        <div className='flex justify-center mb-8'>
            <table className='text-sm text-center text-gray-500 dark:text-gray-400 mt-8 p-8 mr-2'>
              <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                <tr>
                  <th scope="col" class="py-3 px-6">Cantidad De Productos</th>
                  <th scope="col" class="py-3 px-6">Precio Total a Pagar</th>
                </tr>
              </thead>
              <tbody>
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    El total de productos es: <span className='font-bold'>{cantidadCarrito}</span>
                  </th>
                  <td class="py-4 px-6">
                      Total a pagar: <span className='font-bold'>$ {totalAPagar}</span>
                  </td>
                </tr>
              </tbody>
              
              {cantidadCarrito !== "No hay productos agregados al carrito" ?  <button className='text-blue-400 bg-blue-100 px-20'>Terminar Compra</button> : "" }
            </table>
          </div>
          </div>
        </div>
  )
}

export default CartContainer