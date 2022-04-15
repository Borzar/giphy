import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Inicio from './components/Inicio'
import Personaje from './components/Personaje'
import Location from './components/Location'
import ListLocation from './components/ListLocation'
import "./App.css"

const App = () => {
  return (
    <BrowserRouter>    
      <Routes> 
        <Route path='/' element={<Inicio />}> </Route>
        <Route path='/Personaje/:id' element={<Personaje />}> </Route>
        <Route path='/Location' element={<ListLocation/>}></Route>
        <Route path='/Location/:id' element={<Location/>}></Route>
      </Routes>  
    </BrowserRouter>
  )
}

export default App

