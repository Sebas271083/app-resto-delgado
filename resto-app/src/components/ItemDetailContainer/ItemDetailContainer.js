import React from 'react'
import { useState, useEffect } from "react"
import ItemDetail from '../ItemDetail/ItemDetail'
import {useParams} from 'react-router-dom'
import { db } from "../../utils/firabase"
import {collection, getDocs} from "firebase/firestore"

const ItemDetailContainer = () => {

    const {categoryId} = useParams()
    console.log(categoryId)

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
        id: doc.id
      }
        return newProduct
      })

        const newResult = productos.filter(item => item.id === categoryId)
        setItems(newResult[0]) 
        console.log(newResult[0])
      }

    useEffect(() => {
      getData()
    },[])


  return (
    <div>
        <ItemDetail 
            item = {items}
            stock={4}
        />
    </div>
  )
}

export default ItemDetailContainer