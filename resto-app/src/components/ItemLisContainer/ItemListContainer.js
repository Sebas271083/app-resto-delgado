import { useState, useEffect } from "react"
import data from "./mok-data"
import ItemList from "../ItemList/ItemList"

const ItemListContainer = ({greeting}) => {

  const [items, setItems] = useState([])

    const getData = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(data)
      }, 2000);
    })
    
    useEffect(() => {
      getData.then((result)=> {
        setItems(result)

        console.log(result)
      })
    },[])

  return (
    <>
      <ItemList ListaItem={items}/>
    </>
  )
}

export default ItemListContainer