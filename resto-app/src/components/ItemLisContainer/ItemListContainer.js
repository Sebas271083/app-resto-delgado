import { useState, useEffect } from "react"
import ItemList from "../ItemList/ItemList"
import { db } from "../../utils/firabase"
import {collection, getDocs} from "firebase/firestore"



const ItemListContainer = ({greeting}) => {

  const [items, setItems] = useState([])


      const getData = async () => {
        //Crear la referencia
        const query = collection(db, "productos")
        //Solicitud
        const response = await getDocs(query)
        console.log(response)
        const productos = response.docs.map(doc => {
          const newProduct = {
          ...doc.data(),
          id: doc.id,
          key:doc.id
          }
          return newProduct
        })
        console.log(productos)
        setItems(productos)
        }

    useEffect(() => {
      getData()
  },[])

  return (
    <>
      <h1 className="text-3xl text-center pt-3">{greeting}</h1>
      <ItemList ListaItem={items}/>
    </>
  )
}

export default ItemListContainer