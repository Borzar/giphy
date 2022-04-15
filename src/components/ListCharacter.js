import { useState, useEffect } from "react"
import { Link } from 'react-router-dom'
import { allCharacters } from "../services/functions"

const ListCharacter = () => {

  const [characters, setCharacters] = useState(null)
        
  useEffect(() => {
    allCharacters(setCharacters)
  }, [])

  return(
    <div>
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
