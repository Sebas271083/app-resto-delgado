import {  useState } from 'react';
import Contador from './Contador';
import Boton from '../Boton/Boton';
import Swal from 'sweetalert2'
import './sweet.css'



const ItemCount = ({valorInicial, stock, agregarCarrito,}) => {

  const [numClic, setNumclic] = useState(1)
  console.log("numclic", numClic)

  const contadorSuma = ()=> {
    if (numClic >= stock) {

      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'No hay suficiente Stock!',
        footer: '<a href="">¿Porque tengo este problema?</a>'
      })
      return
    }

    console.log(valorInicial)
    console.log(stock)

    setNumclic(numClic + 1)
    console.log("num", numClic)
  }

  const contadorResta = ()=> {
    if(numClic <= 0  ) {       
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'El numero no puede ser menor de 0!',
        footer: '<a href="">¿Porque tengo este problema?</a>'
      })
        return 
    } 
    setNumclic(numClic - 1)
  }


  return (
    <>
    <div class="grid justify-items-center ">
      <p>Stock Disponible: {stock}</p>
    <div className= "  flex justify-center items-center w-72">

        <Boton  
            texto='-'
            esBotonDeClicResta={true}
            manejarClic={contadorResta}
        />
        <Contador 
            numClic= {numClic} 
        />
        
        <Boton  
            texto='+'
            esBotonDeClicSuma={true}
            manejarClic={contadorSuma}
        />


    </div>

    <div className='flex justify-center items-center'>

    <Boton  
        texto= { 'Agregar al Carrito' }
        esBotonAgregar={true}
        manejarClic={ () => agregarCarrito(numClic) }
    />

    </div>
    </div>
  </>
  )
}

export default ItemCount