import { Link } from 'react-router-dom'
import '../css/Navbar.css'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <ul className='navbar-ul'>
        <li className='navbar-li'> 
          <Link className='navbar-link' to='/Personaje'>Lista de personajes</Link>
        </li>
        <li className='navbar-li'>
          <Link className='navbar-link' to='/Location'>Lista de ubicaciones</Link>
        </li>
        <li className='navbar-li'>
          <Link className='navbar-link' to='/'>Lista de episodios // En proceso</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
