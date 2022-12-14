import '../../hojas-de-estilo/Boton.css'

const Boton = ({ texto, esBotonDeClicSuma, esBotonDeClicResta, manejarClic, esBotonAgregar }) => {
  return (
    <button 
        className={ esBotonDeClicSuma ? 'boton-clic-sumar' : esBotonDeClicResta ? 'boton-clic-restar' : esBotonAgregar ? 'agregarCarrito' : '' } 
        onClick={manejarClic} style={{width: "auto"}} >
        {texto}
    </button>
  )
}

export default Boton
