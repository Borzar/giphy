import axios from 'axios'

// characterListPage es una funcion que hace una peticion.
// peticion recibe los datos 
// y se cargan estos datos adentro de state (seria el estado de la funcion) 

const characterListPage = async (page, state) => {
  const peticion = 
    await axios.get(`https://rickandmortyapi.com/api/character/?page=${page}`)
    state(peticion.data.results)
}

const onlyCharacter = async (id, state) => {
  const peticion = await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
  state(peticion.data)
}

const allLocations = async (page,state) => {
  const peticion = await axios.get(`https://rickandmortyapi.com/api/location/?page=${page}`)
  state(peticion.data.results)
  console.log(peticion)
}

const onlyLocation = async (id, state) => {
  const peticion = await axios.get(`https://rickandmortyapi.com/api/location/${id}`)
  state(peticion.data)
}

export {
  onlyCharacter,
  allLocations,
  onlyLocation,
  characterListPage
}
