import { useState, useEffect } from "react"
import { Link } from 'react-router-dom'
import { characterListPage} from "../services/functions"
import '../css/ListCharacter.css'

const ListCharacter = () => {

  const [characters, setCharacters] = useState(null)
  const [page, setPage] = useState(1)

  useEffect(() => {
   characterListPage(page, setCharacters) 
  }, [page])

  const nextPage = () => setPage(page + 1)
  const prevPage = () => setPage(page - 1)

  return(
    <div className='main-listcharacter'>
      <h3> Lista Personajes </h3>
      <div>
        {characters != null ? (
          characters.map(x => (
            <div className='disable-link' key={x.id}>
              <Link to={`/Personaje/${x.id}`}>{x.name} </Link>
          </div>
          ))
        ) : ('Loading ..')}
          
      </div>
      <button onClick={nextPage} > Next </button>
      {page > 0 ? (page) : ('error')} 

      <button onClick={prevPage}> Prev </button>
    </div>
	)
}

export default ListCharacter
