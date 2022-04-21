import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to='/Personaje'>Obtener lista de personajes</Link>
        </li>
        <li>
          <Link to='/Location'>Obtener lista de Ubicaciones</Link>
        </li>
        <li>
          <Link to='/'>Obtener Lista de episodios // En proceso</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
