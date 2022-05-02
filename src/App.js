import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Inicio from './components/Inicio'
import Personaje from './components/Personaje'
import Location from './components/Location'
import ListLocation from './components/ListLocation'
import ListCharacter from './components/ListCharacter'
import "./App.css"
import ListEpisodes from './components/ListEpisodes'
import Episode from './components/Episode'

const App = () => {
  return (
    <BrowserRouter>    
      <Routes> 
        <Route path='/' element={<Inicio />}> </Route>
        <Route path='/Personaje' element={<ListCharacter/>}> </Route>
        <Route path='/Personaje/:id' element={<Personaje />}> </Route>
        <Route path='/Location' element={<ListLocation/>}></Route>
        <Route path='/Location/:id' element={<Location/>}></Route>
        <Route path='/Episode' element={<ListEpisodes/>}></Route>
        <Route path='/Episode/:id' element={<Episode/>}></Route>
      </Routes>  
    </BrowserRouter>
  )
}

export default App

