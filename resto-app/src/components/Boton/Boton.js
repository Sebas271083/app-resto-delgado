import '../../hojas-de-estilo/Boton.css'

const Boton = ({ texto, esBotonDeClicSuma, esBotonDeClicResta, manejarClic }) => {
  return (
    <button 
        className={ esBotonDeClicSuma ? 'boton-clic-sumar' : esBotonDeClicResta ? 'boton-clic-restar' : 'boton-reiniciar' } 
        onClick={manejarClic}>
        {texto}
    </button>
  )
}

export default Boton
