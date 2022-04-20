import { useState, useEffect } from "react"
import { locationListPage } from "../services/functions"
import { Link } from 'react-router-dom'
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
  <div className='main-ListLocation'>
    <h3> Lista de ubicaciones </h3>
    <div>
      {
        listLocation != null ? (
          listLocation.map((x) => (
            <div key={x.id}>
             <Link to={`/Location/${x.id}`}> {x.name} </Link> 
            </div>
          ))
          ) : ('Loading')
       }
    </div>
    <button onClick={nextPage}>Next</button>
    {page <= 0 ? ('error') : (page)}
    <button onClick={prevPage}>Prev</button>
  </div>
    )
  }

export default ListLocation
