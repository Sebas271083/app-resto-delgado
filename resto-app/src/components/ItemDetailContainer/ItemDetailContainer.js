import React from 'react'
import { useState, useEffect } from "react"
import ItemDetail from '../ItemDetail/ItemDetail'
import {useSearchParams} from 'react-router-dom'


const ItemDetailContainer = () => {

    const {categoryId} = useSearchParams()
    console.log(categoryId)

    const [items, setItems] = useState([])

    
    const url = "https://fakestoreapi.com/products"

    const getData = () => {
      fetch(url)
          .then((response) => response.json())
          .then((result) => {
              console.log(result)
              const newResult = result.filter(item => item.id === Number(categoryId))
              setItems(newResult[0]) 
              console.log(newResult[0])
          })
      }

      useEffect(() => {
        getData()
    },[])
    console.log(items)
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