import React, {useContext, useState} from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from "react-router-dom";
import {db} from "../../utils/firabase";
import { collection, addDoc, updateDoc, doc } from "firebase/firestore";


const CartContainer = () => {
    const {productCartList, removeItem, clear, totalCart, totalPrecio, setProductCartList} = useContext(CartContext)
    const [idOrder, setIdOrder] = useState("")
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [spinner, setSpinner] = useState(false)
    const cantidadCarrito = totalCart()
    const totalAPagar = totalPrecio()
    console.log(totalAPagar)
    console.log(cantidadCarrito)


    


  const sendOrder = (e)=> {
    e.preventDefault()
      setSpinner(true)



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
        setEmail(order.buyer.email)
        setIdOrder(response.id)
        setProductCartList([])
        setSpinner(false)
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
        {spinner && <div className="text-center">
        <div role="status">
            <svg className="inline mr-2 w-16 h-16 text-gray-200 animate-spin dark:text-gray-600 fill-yellow-400" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
            </svg>
            <span className="sr-only">Loading...</span>
        </div>
          </div> }
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
        
        <table className='text-sm text-center text-gray-500 dark:text-gray-400 mt-8 p-8 mr-2 border' name='tabla'>
                  <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                  <tr className='border'>
                  <th scope="col" className="py-3 px-6">Nombre del Producto</th>
                  <th scope="col" className="py-3 px-6">Imagen del Producto</th>
                  <th scope="col" className="py-3 px-6">Precio Unitario</th>
                  <th scope="col" className="py-3 px-6">Cantidad</th>
                  <th scope="col" className="py-3 px-6">Precio Total</th>
                  <th scope="col" className="py-3 px-6">Eliminar Producto</th>
                </tr>
                </thead>
           
           
       
            {productCartList.map(item => (
              <>
                  key={item.id}
                  <tbody>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th scope="row" className=" py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                     <Link to={`/productos/${item.id}`}>
                    <h3 className='font-bold mb-3 ' style={{maxWidth: "250px"}}>{item.title}</h3>
                  </Link>
                  </th>
                  <td className="py-4 px-6">
                  <img className='mb-3 m-4 flex justify-center items-center ml-auto mr-auto p-2' src={item.image} style={{width:"10%"}} alt="imagen"/>
                  </td>
                  <td className="py-4 px-6">
                  <p className='mb-2 m-4' style={{maxWidth: "80px"}}>Precio unitario: <span className='font-bold'>$ {item.price}</span></p>
                  </td>
                  <td className="py-4 px-6">
                  <p>cantidad: {item.quantity} </p>
                  </td>
                  <td className="py-4 px-6">
                  <p className='mb-2 m-4' style={{maxWidth: "80px"}}>Precio total: <span className='font-bold'> $ {item.price * item.quantity} </span></p>
                  </td>
                  <td className="py-4 px-6">
                  <button className='mb-6 m-4' style={{backgroundColor:"red", width:"100px", borderRadius:"10px"}} onClick={() => removeItem(item.id)}>Elimnar Registro</button>
                  </td>
                </tr>
                <div className='sm:flex items-center justify-center m-4'>  
                </div>
                </tbody>
              </>              
))}
</table> 
        
        
        </div>
        <div className='flex justify-center mb-8'>
            <table className='text-sm text-center text-gray-500 dark:text-gray-400 mt-8 p-8 mr-2 border'>
              <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                <tr className='border'>
                  <th scope="col" className="py-3 px-6">Cantidad De Productos</th>
                  <th scope="col" className="py-3 px-6">Precio Total a Pagar</th>
                </tr>
              </thead>
              <tbody className='border'>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th scope="row" className="border py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                     <span className='font-bold'>{cantidadCarrito}</span>
                  </th>
                  <td className="py-4 px-6">
                       <span className='font-bold'>$ {totalAPagar}</span>
                  </td>
                </tr>
         
              </tbody>
            </table>
          </div>
          </div> }
          {cantidadCarrito ? <div className='flex justify-center text-center'></div> :
          <>
          {!idOrder &&
          <div className='flex w-full justify-center'>
              <form className='mt-8 w-4/12 ml-8 ' onSubmit={sendOrder} >
                  <div className="mb-6">
                    <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>Nombre: </label>
                    <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Nombre" required/>
                  </div>
                  <div className="mb-6">
                    <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>Telefono</label>
                    <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Telefono" required/>
                  </div>
                  <div className="mb-6">
                    <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>Correo</label>
                    <input type="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email" required/>
                  </div>
                  <button type='submit' className='bg-gray-600 w-full rounded-xl'> Enviar Orden</button> 
              </form> 
              </div> }
              </>
          }
        </div> 
   
      
  )
            
}


export default CartContainer