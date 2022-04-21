import { useState, useEffect } from "react"
import { filterbyName } from "../services/functions"
import '../css/SearchBar.css'
import { Link } from 'react-router-dom'

const SearchBar = () => {
  const [keyword, setKeyword] = useState('')
  const [characters, setCharacters] = useState(null) 

  useEffect(() => {
    filterbyName(keyword, setCharacters)
  }, [keyword])


  const handleChanged = (e) => {
    setKeyword(e.target.value)
  }
  
  return(
    <div className='main-search-bar'>
      <h3>Buscar Personaje</h3>
        <input
          type='text'          
          value={keyword} 
          placeholder='Filter by name' 
          onChange={handleChanged}
         />
      {
        characters != null ? (
          characters.map((character) => (
            <div key={character.id}> 
              <Link to={`/Personaje/${character.id}`}> {character.name} </Link>
            </div>
          ))
        ) : ('Lista de personajes ...')
      }
    </div>
  )
}

export default SearchBar
