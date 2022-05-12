import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Inicio from './components/Inicio'
import Location from './components/Location'
import ListLocation from './components/ListLocation'
import ListCharacter from './components/ListCharacter'
import ListEpisodes from './components/ListEpisodes'
import Episode from './components/Episode'
import SearchBar from './components/SearchBar'
import "./App.css"
import Character from './components/Character'
const App = () => {
  return (
    <BrowserRouter>    
      <Routes> 
        <Route path='/' element={<Inicio />}> </Route>
        <Route path='/search' element={<SearchBar/>}> </Route>
        <Route path='/characters' element={<ListCharacter/>}> </Route>
        <Route path='/characters/:id' element={<Character/>}> </Route>
        <Route path='/locations' element={<ListLocation/>}></Route>
        <Route path='/locations/:id' element={<Location/>}></Route>
        <Route path='/episodes' element={<ListEpisodes/>}></Route>
        <Route path='/episodes/:id' element={<Episode/>}></Route>
      </Routes>  
    </BrowserRouter>
  )
}

export default App

