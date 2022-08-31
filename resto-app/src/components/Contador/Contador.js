
import '../../hojas-de-estilo/Contador.css'


const Contador = ({numClic}) => {
  return (
    <div className='contador'>
        <div>
            {numClic}
        </div>
  </div>
  )
}

export default Contador