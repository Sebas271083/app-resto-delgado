
import ItemCount from "../Contador/ItemCount"

const Item = ({id, name, description, price, image, stock}) => {
  return (
    <div className="mt-7 flex border m-2 justify-center items-center ">
        <div className="m-3"> 
        <img className="h-56 ml-auto mr-auto mb-2" src={image} alt={name}/>
        <h1 className="font-bold mb-2">{name}</h1>
        <p>{description}</p>
        <p>{price}</p>
        <ItemCount 
            valorInicial = {0}
            stock = {stock}
            name = {name}
        />
        </div>
        

    </div>
  )
}

export default Item