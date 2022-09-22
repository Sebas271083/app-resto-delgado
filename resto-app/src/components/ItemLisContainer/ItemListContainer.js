import { useState, useEffect } from "react"
// import data from "./mok-data"
import ItemList from "../ItemList/ItemList"
import { db } from "../../utils/firabase"
import {doc, getDoc, collection, getDocs} from "firebase/firestore"

import { Firestore } from "firebase/firestore"
import { async } from "@firebase/util"

const ItemListContainer = ({greeting}) => {

  const [items, setItems] = useState([])

    // const url = "https://fakestoreapi.com/products"
    const url = db


    // const getData = () => {
    //   fetch(url)
    //       .then((response) => response.json())
    //       .then((result) => {
    //           console.log(result) 
    //           setItems(result) 
    //       })
    //   }

      const getData = async () => {
        //Crear la referencia
        const query = collection(db, "productos")
        //Solicitud
        const response = await getDocs(query)
        console.log(response)
        const productos = response.docs.map(doc => {
          const newProduct = {
          ...doc.data(),
          id: doc.id
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