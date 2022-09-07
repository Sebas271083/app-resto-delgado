import ItemCount from "../Contador/ItemCount"
import './ItemDetail.css'


const ItemDetail = ({item, stock}) => {
    console.log(item.title)

  return (
    
    <>
          <a className="enlaceVolver" href="/productos">Volver</a>

      <div className="border p-5 w-80 mr-8 ml-8 mb-4 justify-center items-center text-center alto rounded-xl" style={{}} > 

          <img className="imagen ml-auto mr-auto mb-2" src={item.image} alt={item.title}/>
          <h1 className="font-bold mb-2">{item.title}</h1>
          <p>{item.description}</p>
          <div className="">
            <p className="font-bold text-lg mt-5" >$ {item.price}</p>
          </div>
      </div>

      <ItemCount 
          valorInicial = {0}
          stock = {stock}
          name = {item.title}
      />
    </>
  )
}

export default ItemDetail