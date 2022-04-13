import axios from 'axios'

// allCharacters es una funcion que hace una peticion.
// peticion recibe los datos 
// y se cargan estos datos adentro de state (seria el estado de la funcion) 

const allCharacters =  async (state) => {
  const peticion = 
    await axios.get('https://rickandmortyapi.com/api/character')
    state(peticion.data.results) 
}

const onlyCharacter = async (id, state) => {
    const peticion = 
    await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
    state(peticion.data)
}

export {
  allCharacters,
  onlyCharacter
}
