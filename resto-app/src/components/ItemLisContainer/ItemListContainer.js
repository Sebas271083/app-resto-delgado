import { useState, useEffect } from "react"
// import data from "./mok-data"
import ItemList from "../ItemList/ItemList"
import {useParams} from 'react-router-dom'

const ItemListContainer = ({greeting}) => {

  const {categoryId} = useParams()
  console.log(categoryId)

  const [items, setItems] = useState([])

    const url = "https://fakestoreapi.com/products"

    const getData = () => {
      fetch(url)
          .then((response) => response.json())
          .then((result) => {
              console.log(result) 
              setItems(result) 
          })
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