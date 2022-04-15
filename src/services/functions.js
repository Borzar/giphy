import axios from 'axios'

// allCharacters es una funcion que hace una peticion.
// peticion recibe los datos 
// y se cargan estos datos adentro de state (seria el estado de la funcion) 

const allCharacters =  async (state) => {
  const peticion = await axios.get('https://rickandmortyapi.com/api/character')
  state(peticion.data.results) 
}

const onlyCharacter = async (id, state) => {
  const peticion = await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
  state(peticion.data)
}

const allLocations = async (state) => {
  const peticion = await axios.get('https://rickandmortyapi.com/api/location')
  state(peticion.data.results)
}

const onlyLocation = async (id, state) => {
  const peticion = await axios.get(`https://rickandmortyapi.com/api/location/${id}`)
  state(peticion.data)
  console.log(peticion)
}

export {
  allCharacters,
  onlyCharacter,
  allLocations,
  onlyLocation
}
