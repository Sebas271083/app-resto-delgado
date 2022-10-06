
import { useState,useEffect,useContext } from "react"
import ItemCount from "../Contador/ItemCount"

import { CartContext } from '../../context/CartContext'

import './Item.css'
import { Link } from "react-router-dom"

const Item = ({id, title, description, price, image, stock}) => {
  
  const {addItem} = useContext(CartContext);
  const [contador, setContador] = useState(0);
  const [agregado, setAgregado] = useState(false)

      const agregarCarrito = (dato) => {

      console.log("HizoClick", dato)
      setContador(dato)
      const item = {
        id,
        title,
        image, 
        price
      }
      setAgregado(true)
      console.log(item)
      addItem(item, dato)
      console.log("agrega " + title, description, image)
    }

  return (

    <>  
        <Link to={`/productos/${id}`}>
        <div className="border p-5 w-80 mr-8 mt-8 ml-8 mb-4 justify-center items-center text-center alto rounded-xl" style={{}} > 
          <img className="imagen ml-auto mr-auto mb-2" src={image} alt={title}/>
          <h1 className="font-bold mb-2">{title}</h1>
          {/* <p>{description}</p> */}
          <div className="">
            <p className="font-bold text-lg mt-5">${price}</p>
          </div>
        </div>
    </Link>
    

    {contador === 0 ?
      <ItemCount 

          contador = {contador}
          valorInicial = {0}
          stock = {stock}
          agregarCarrito =  {contador === 0 ? agregarCarrito : ""}
      />

    : <Link to={'/cart'} style={{display:"flex", justifyContent:"center", alignItems:"center", padding:"5px", backgroundColor:"blueviolet", color:"white", fontSize:"30px"}}> Finalizar Compra</Link>}





    </>
  )
}

export default Item