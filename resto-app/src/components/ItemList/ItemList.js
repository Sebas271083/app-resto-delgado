import Item from "../Item/Item"

const ItemList = ({ListaItem}) => {
    console.log(ListaItem)
return (
    <>
    <div className="flex justify-center items-center text-center">  
    {
        ListaItem.map((producto)=> {
            return (
                <Item 
                    name = {producto.name}
                    description = {producto.description}
                    price = {producto.price}
                    image = {producto.image}
                    stock= {producto.stock}
                />
            )
        })
    }
        

    </div>

    </>
  )
}

export default ItemList