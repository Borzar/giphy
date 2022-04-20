import ListCharacter from './ListCharacter'
import ListLocation from './ListLocation'
import '../css/Inicio.css'
import SearchBar from './SearchBar'
const Inicio = () => {
    
  return (
    <div className='flex-container'> 
      <ListLocation/>
      <ListCharacter/>
      <SearchBar />
    </div> 
  )
}

export default Inicio

