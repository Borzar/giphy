import { Link } from 'react-router-dom'
import { allCharacters } from './services/functions'
import { useEffect, useState } from "react"

const Inicio = () => {
  const [characters, setCharacters] = useState(null)
        
  useEffect(() => {
    allCharacters(setCharacters)
  }, [])
    
  return (
    <div>
      {characters != null ? (
        characters.map(x => (
          <div key={x.id}>
            <Link to={`/personaje/${x.id}`}>{x.name} </Link>
            <p> id:{x.id}</p>
            <p> status: {x.status}</p>
            <p> species: {x.species}</p>
            <p> gender: {x.gender}</p>
            <img src={x.image}/>
         </div>
        ))
      ) : ( 'no hay personajes' )}
    </div>
  )
}

export default Inicio

