
import ItemCount from "../Contador/ItemCount"
import './Item.css'

const Item = ({id, name, description, price, image, stock}) => {


  return (

    <>  
        <a href={`/productos/${id}`}>
        <div className="border p-5 w-80 mr-8 mt-8 ml-8 mb-4 justify-center items-center text-center alto rounded-xl" style={{}} > 
          <img className="imagen ml-auto mr-auto mb-2" src={image} alt={name}/>
          <h1 className="font-bold mb-2">{name}</h1>
          <p >{description}</p>
          <div className="">
            <p className="font-bold text-lg mt-5" >$ {price}</p>
          </div>
        
        </div>
    </a>
    <ItemCount 
            valorInicial = {0}
            stock = {stock}
            name = {name}
        />
    </>
  )
}

export default Item