import { useParams } from "react-router-dom"
import { onlyCharacter } from "../services/functions"
import { useEffect, useState } from "react"

const Personaje = () => {
  const params = useParams()
  const [character, setCharacter] = useState(null) 

  useEffect(() => {
    onlyCharacter( params.id, setCharacter )
  },[])

  return (
    <div>
      {
        character != null ? (
          <div>
            <h1> {character.name} </h1>
            <p> gender: {character.gender} </p>
            <p> id: {character.id} </p>
            <p> species: {character.species} </p>
            <p> status: {character.status} </p>
            <img src={character.image}/>
          </div>
        ) : ('no hay personajes') 
      }
    </div>
  )
}

export default Personaje
