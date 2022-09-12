
import '../../hojas-de-estilo/Contador.css'


const Contador = ({numClic}) => {
  return (
    <div className='contador bg-gray-400'>
        <div>
            {numClic}
        </div>
  </div>
  )
}

export default Contador