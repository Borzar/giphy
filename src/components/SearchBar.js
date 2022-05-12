import { useState, useEffect } from "react"
import { filterbyName } from "../services/functions"
import { Link } from 'react-router-dom'
import Title from "./Title"
import Navbar from "./Navbar"
import '../css/SearchBar.css'

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
    <div>
      <Title />
      <Navbar />
      <div className='filter-table'>
        <h3>Buscar Personaje</h3>
          <input className='filter-table-input'
            type='text'          
            value={keyword} 
            placeholder='Filter by name' 
            onChange={handleChanged}
           />
        {
          characters != null ? (
            characters.map((character) => (
              <div key={character.id}> 
                <Link className='disable-link' to={`/characters/${character.id}`}> {character.name} </Link>
              </div>
            ))
          ) : ('Lista de personajes ...')
        }
      </div>
    </div>
  )
}

export default SearchBar
