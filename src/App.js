import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Inicio from './components/Inicio'
import Personaje from './components/Personaje'
import "./App.css"

const App = () => {
  return (
    <BrowserRouter>    
      <Routes> 
        <Route path='/' element={<Inicio />}> </Route>
        <Route path='/Personaje/:id' element={<Personaje />}> </Route>
      </Routes>  
    </BrowserRouter>
  )
}

export default App
