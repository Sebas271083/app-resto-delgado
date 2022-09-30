import React, {useContext, useEffect, useState} from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from "react-router-dom";
import {db} from "../../utils/firabase";
import { collection, addDoc, updateDoc, doc } from "firebase/firestore";



const CartContainer = () => {
    const {productCartList, removeItem, clear, totalCart, totalPrecio, setProductCartList} = useContext(CartContext)
    const [idOrder, setIdOrder] = useState("")
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const cantidadCarrito = totalCart()
    const totalAPagar = totalPrecio()
    console.log(totalAPagar)
    console.log(cantidadCarrito)




  const sendOrder = (e)=> {
    e.preventDefault()
    console.log("enviando")

    const order = {
      buyer:{
        name:e.target[0].value,
        phone:e.target[1].value,
        email:e.target[2].value
      },
      items: productCartList,
      total: totalPrecio()
    }
    console.log(order)  
    //Crear la referencia donde se va a guardar el documento
    const queryRef = collection(db, "orders")
    //Crear el documento
    addDoc(queryRef, order).then(response => {
      setName(order.buyer.name)
      setEmail(order.buyer.name)
      setIdOrder(response.id)
      setProductCartList([])
    })
  }

  const updateOrder = () => {
    //Creamos la referencia
    const queryRef = doc(db, "orders", idOrder)
    

    //Actualizar el documento
    updateDoc(queryRef, {
      buyer: {
        name: "",
        phone:"",
        email:""
      },
      items:[
        {
          category:"",
          description:"",
          id:"",
          image:"",
          price:"",
          quantity:"",
          title:""

        }
      ]
    })
  }

  return (
    <div>
        <button onClick={updateOrder}>actualizar orden</button>
        {idOrder && 
        <div className='ml-8'>
        <div>
          <p>Su orden fue creada, id <span className='font-bold'>{idOrder}</span></p>
        </div> 
        <div> 
          <p>nombre: <span className='font-bold'>{name}</span></p>
        </div>
        <div> 
          <p>Email: <span className='font-bold'>{email}</span></p>
        </div>
        </div>}
        {!idOrder &&
        <h1 className='text-center text-4xl mb-10 mt-10 font-bold'>Tu Carrito</h1> }
        
        {cantidadCarrito === "No hay productos agregados al carrito" ? <div className='flex justify-center text-center'><p className='ml-4'>{cantidadCarrito} <Link to={`/productos`}><p> <span className='font-bold mt-2 text-lg'>Volver</span> a los productos </p></Link></p></div> : ""}
        {!idOrder &&
        <button className='bg-red-600 w-64 ml-auto mr-4' onClick={clear}>Vaciar Carrito</button> }
        {!idOrder &&
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
                <td>
                {cantidadCarrito !== "No hay productos agregados al carrito" ?  <button className='w-full text-blue-400 bg-blue-100 px-20'>Terminar Compra</button> : "" }
                </td>
              </tbody>
            </table>
          </div>
          </div> }
          {!idOrder &&
          <form className='mt-8 max-w-2xl ml-8' onSubmit={sendOrder} >
                <div className="mb-6">
                  <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>Nombre: </label>
                  <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Nombre"/>
                </div>
                <div className="mb-6">
                  <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>Telefono</label>
                  <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Telefono"/>
                </div>
                <div className="mb-6">
                <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>Correo</label>
                <input type="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email"/>
                </div>
                <button type='submit' className='bg-gray-600 w-full'>Enviar Orden</button>
              </form> }
        </div> 
   
      
  )
            
}


export default CartContainer