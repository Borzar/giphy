import { useState, useEffect } from "react"
import { Link } from 'react-router-dom'
import { allCharacters } from "../services/functions"
import '../css/ListCharacter.css'

const ListCharacter = () => {

  const [characters, setCharacters] = useState(null)
        
  useEffect(() => {
    allCharacters(setCharacters)
  }, [])

  return(
    <div className='main-ListCharacter'>
      <h3> Lista Personajes </h3>
      <div>
        {characters != null ? (
          characters.map(x => (
            <div key={x.id}>
              <Link to={`/Personaje/${x.id}`}>{x.name} </Link>
          </div>
          ))
        ) : ('Loading ..')}

      </div>
    </div>
	)
}

export default ListCharacter
