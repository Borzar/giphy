import { useParams } from "react-router-dom"
import { onlyCharacter } from "../services/functions"
import { useEffect, useState } from "react"
import '../css/Character.css'

const Character = () => {
  const params = useParams()
  const [character, setCharacter] = useState(null) 

  useEffect(() => {
    onlyCharacter( params.id, setCharacter )
  },[])

  return (
    <div className='main-character'>
      {
        character != null ? (
          <div>
            <h1> {character.name} </h1>
            <p> <b>Id </b>{character.id}</p>
            <p> <b>Gender </b>{character.gender}</p>
            <p> <b>Species </b>{character.species}</p>
            <p> <b>Status </b>{character.status}</p>
            <img className='main-character-img' src={character.image}/>
          </div>
        ) : ('no hay personajes') 
      }
    </div>
  )
}

export default Character
