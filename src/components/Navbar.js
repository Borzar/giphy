import { Link } from 'react-router-dom'
import '../css/Navbar.css'
import logo from '../assets/ghostimage.jpeg'

const Navbar = () => {
  return (
    <nav className='navbar' data-testid='navbar'>
      <ul className='navbar-ul'>
        <div>
        <li className='navbar-li'>
          <img src={logo} />
          <Link className='nav-inline' to='/search'>Filter Characters</Link>
        </li>
        </div>
        <div>
        <li className='navbar-li'> 
          <img src={logo} />
          <Link className='nav-inline' to='/characters'>List of Characters</Link>
        </li>
        </div>
        <div>
        <li className='navbar-li'>
          <img src={logo} />
          <Link className='nav-inline' to='/locations'>List of Locations</Link>
        </li>
        </div>
        <div>
        <li className='navbar-li'>
          <img src={logo} />
          <Link className='nav-inline' to='/episodes'>List of Episodes</Link>
        </li>
        </div>
      </ul>
    </nav>
  )
}

export default Navbar
