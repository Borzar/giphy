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

const locationListPage = async (page,state) => {
  const peticion = await axios.get(`https://rickandmortyapi.com/api/location/?page=${page}`)
  state(peticion.data.results)
}

const onlyLocation = async (id, state) => {
  const peticion = await axios.get(`https://rickandmortyapi.com/api/location/${id}`)
  state(peticion.data)
}

const filterbyName = async ( name, state) => {
  try {
  const peticion = await axios.get(`https://rickandmortyapi.com/api/character/?name=${name}`)
    state(peticion.data.results)
  } catch (error) {
    console.error(error) 
  }
} 

export {
  onlyCharacter,
  locationListPage,
  onlyLocation,
  characterListPage,
  filterbyName
}
