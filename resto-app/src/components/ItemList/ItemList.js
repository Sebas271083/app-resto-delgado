import { useLocation, useSearchParams } from "react-router-dom"
import Item from "../Item/Item"


const ItemList = ({ListaItem}) => {



let {search} = useLocation() 
console.log(search)   
let query = new URLSearchParams(search)
console.log(query)

let start = query.get("categoria")

console.log("start " + start)

let NuevaLista;


if (start === null || start === "") {
    NuevaLista = ListaItem
} else {
    NuevaLista = ListaItem.filter(item => item.category === start)
}


return (

    <div className=" flex flex-wrap justify-center items-center text-center">
        {
             
             NuevaLista.map((producto)=> (
                
                    <div className="mb-5 mr-8 bg-gray-100 p-2 rounded-md">
                        <Item        
                            key={producto.id}
                            id= {producto.id}
                            title = {producto.title}
                            description = {producto.description}
                            price = {producto.price}
                            image = {producto.image}
                            stock= {4}
                        />
                    </div>
                )
            )
        }
            
    </div>


  )
}

export default ItemList