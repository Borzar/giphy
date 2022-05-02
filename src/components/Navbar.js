import { Link } from 'react-router-dom'
import '../css/Navbar.css'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <ul className='navbar-ul'>
        <li className='navbar-li'> 
          <Link className='navbar-link' to='/characters'>List of Characters</Link>
        </li>
        <li className='navbar-li'>
          <Link className='navbar-link' to='/locations'>List of Locations</Link>
        </li>
        <li className='navbar-li'>
          <Link className='navbar-link' to='/episodes'>List of Episodes</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
