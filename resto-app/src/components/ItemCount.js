import { useState } from 'react';
import Contador from './Contador';
import Boton from './Boton';


const ItemCount = () => {
    
  const [numClic, setNumclic] = useState(0)

  const contadorSuma = ()=> {
    setNumclic(numClic + 1)
  }

  const contadorResta = ()=> {
    if(numClic <= 0) {
        alert("EL numero no puede ser menor a 0")
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
    <div class="grid justify-items-center mt-11">
    <div className= "border-2 border-neutral-300 flex justify-center items-center w-72">
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
        texto='Reiniciar'
        esBotonDeClicResta={false}
        manejarClic={reiniciarContador}
    />

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