import Item from "../Item/Item"

const ItemList = ({ListaItem}) => {
    console.log(ListaItem)
return (
    <>
    <div className=" flex flex-wrap justify-center items-center text-center">
        {
            ListaItem.map((producto)=> (
                
                    <div className="mb-5 mr-8">

                    <Item 
                        key={producto.id}
                        id= {producto.id}
                        name = {producto.title}
                        // description = {producto.description}
                        price = {producto.price}
                        image = {producto.image}
                        stock= {4}
                    />
                    </div>
                )
            )
        }
            
    </div>

    </>
  )
}

export default ItemList