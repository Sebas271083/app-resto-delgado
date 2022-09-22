import React from 'react'
import { useState, useEffect } from "react"
import ItemDetail from '../ItemDetail/ItemDetail'
import {useParams} from 'react-router-dom'
import { db } from "../../utils/firabase"
import {doc, getDoc, collection, getDocs, query, where} from "firebase/firestore"

import { Firestore } from "firebase/firestore"
import { async } from "@firebase/util"


const ItemDetailContainer = () => {

    const {categoryId} = useParams()
    console.log(categoryId)

    const [items, setItems] = useState([])

    
    // const url = "https://fakestoreapi.com/products"

    // const getData = () => {
    //   fetch(url)
    //       .then((response) => response.json())
    //       .then((result) => {
    //           console.log(result)
    //           const newResult = result.filter(item => item.id === Number(categoryId))
    //           setItems(newResult[0]) 
    //           console.log(newResult[0])
    //       })
    //   }

      const url = db

      
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

        // const queryRef = query(collection(db,"productos"), where( "id", "===", "categoryId"))
        const newResult = productos.filter(item => item.id === categoryId)
        setItems(newResult[0]) 
        console.log(newResult[0])
      }

    useEffect(() => {
      getData()
    },[])

    //   useEffect(() => {
    //     getData()
    // },[])
    // console.log(items)
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