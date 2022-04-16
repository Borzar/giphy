import ListCharacter from './ListCharacter'
import ListLocation from './ListLocation'
import '../css/Inicio.css'
const Inicio = () => {
    
  return (
    <div className='flex-container'> 
      <ListLocation/>
      <ListCharacter/>
    </div> 
  )
}

export default Inicio

