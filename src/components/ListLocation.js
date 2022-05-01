import { useState, useEffect } from "react"
import { locationListPage } from "../services/functions"
import { Link } from 'react-router-dom'
import Title from './Title'
import Navbar from "./Navbar"
import '../css/ListLocation.css'

const ListLocation = () => {
  const [listLocation, setListLocation] = useState(null)
  const [page, setPage] = useState(1)

  useEffect(() => {
    locationListPage(page, setListLocation)
  }, [page])

  const nextPage = () => setPage(page + 1)
  const prevPage = () => setPage(page - 1)

return (

  <div>
    <Title />
    <Navbar />
    <div className='main-ListLocation'>
      <h3> Lista de ubicaciones </h3>
      <div>
        {
          listLocation != null ? (
            listLocation.map((x) => (
              <table className='table'>
                <tr key={x.id}>
                  <td>{x.id}</td>
                  <td><Link to={`/Location/${x.id}`}>{x.name} </Link></td>
                  <td>{x.ype}</td>
                </tr>
              </table>
            ))
            ) : ('Loading')
         }
      </div>
1
    </div>
      <div className='button'> 
        <button onClick={nextPage}>Next</button>
          {page <= 0 ? ('error') : (page)}
        <button onClick={prevPage}>Prev</button>
      </div>
  </div>
  )
}

export default ListLocation
