import { useState, useEffect } from "react"
import { Link } from 'react-router-dom'
import { characterListPage, } from "../services/functions"
import '../css/ListCharacter.css'
import Title from './Title'
import Navbar from "./Navbar"

const ListCharacter = () => {

  const [characters, setCharacters] = useState(null)
  const [page, setPage] = useState(1)

  useEffect(() => {
   characterListPage(page, setCharacters) 
  }, [page])

  const nextPage = () => {
    if (page === 42) return
    setPage(page + 1)
  }

  const prevPage = () => {
    if (page === 1) return
    setPage(page - 1)
  }

  return(
    <div> 
      <Title />
      <Navbar />
      <div className='list'>
        <h3>Lista personajes </h3>
        <div className='flex-container'>
          {characters != null ? (
            characters.map(x => (
              <div  key={x.id}>
                <img className='img' src={x.image} /> 

                <Link className='block' to={`/Personaje/${x.id}`}>{x.name}</Link>
              </div>
            ))
          ) : ('Cargando Personajes..')}
        </div>
        <div className='button'>
          <button onClick={prevPage}> Prev </button>
          {page > 0 ? (page) : ('error')} 
          <button onClick={nextPage} > Next </button>
        </div>
      </div>
    </div>
	)
}

export default ListCharacter
