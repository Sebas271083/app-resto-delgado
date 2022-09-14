import ItemCount from "../Contador/ItemCount"
import { useContext, useState } from "react"
import './ItemDetail.css'
import { CartContext } from "../../context/CartContext"

const ItemDetail = ({item, stock}) => {
  
    const {addItem, isInCart} = useContext(CartContext);
    const [contador, setContador] = useState(0);


    const agregarCarrito = (dato) => {
      console.log("HizoClick", dato)
      setContador(dato)
      addItem(item, dato)
    }

    console.log(item.title);

  return (  
 
 
 
 <>
      <a className="enlaceVolver" href="/productos">Volver</a>

      <div className="border p-5 w-80 mr-8 ml-8 mb-4 justify-center items-center text-center alto rounded-xl" style={{}} > 

          <img className="imagen ml-auto mr-auto mb-2" src={item.image} alt={item.title}/>
          <h1 className="font-bold mb-2">{item.title}</h1>
          <p>{item.description}</p>
          <div className="">
            <p className="font-bold text-lg mt-5" >$ {item.price}</p>
          </div>
      </div>

      <ItemCount 
          valorInicial = {0}
          stock = {stock}
          name = {item.title}
          agregarCarrito = {agregarCarrito}
      />
    </>
  )
}

export default ItemDetail