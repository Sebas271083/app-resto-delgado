import { useState } from 'react';
import Contador from './Contador';
import Boton from '../Boton/Boton';



const ItemCount = ({valorInicial, stock, name}) => {
    
  const [numClic, setNumclic] = useState(0)

  const contadorSuma = ()=> {
    if (numClic >= stock) {
      console.log(numClic)
      alert("No hay stock Suficiente")
      return
    }
    console.log(valorInicial)
    console.log(stock)
    console.log(name)
    setNumclic(numClic + 1)
  }

  const contadorResta = ()=> {
    if(numClic <= 0  ) {
        alert("EL numero no puede ser menor a 0 ")
        return 
    } 
    setNumclic(numClic - 1)
  }

  const reiniciarContador = () => {
    setNumclic(0)
  }

  const agregarCarrito = () => {
    console.log("Agregar al Carrito")
  }
  return (
    <>
    <div class="grid justify-items-center ">
    <div className= "  flex justify-center items-center w-72">
        <Boton  
            texto='+'
            esBotonDeClicSuma={true}
            manejarClic={contadorSuma}
        />
        <Contador 
            numClic= {numClic} />
        <Boton  
            texto='-'
            esBotonDeClicResta={true}
            manejarClic={contadorResta}
        />

    </div>

    <div className='flex justify-center items-center'>



    <Boton  
        texto='Agregar al Carrito'
        esBotonDeClicResta={false}
        manejarClic={agregarCarrito}
    />

    </div>
    </div>
  </>
  )
}

export default ItemCount