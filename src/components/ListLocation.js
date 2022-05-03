import { useState, useEffect } from "react"
import { locationListPage } from "../services/functions"
import Title from './Title'
import Navbar from "./Navbar"
import '../css/List.css'

const ListLocation = () => {
  const [location, setLocation] = useState(null)
  const [page, setPage] = useState(1)

  useEffect(() => {
    locationListPage(page, setLocation)
  }, [page])

  const nextPage = () => {
    if (page === 7)
      return
    setPage(page + 1)
  }

  const prevPage = () => {
    if (page === 1)
      return
    setPage(page - 1)
  }

return (
    <div>
      <Title />
      <Navbar />
      <div className='list-of'>
        <h3>List of Locations</h3>
        <div className='list-of-button'> 
          <button onClick={prevPage}>Prev</button>
          {page}
          <button onClick={nextPage}>Next</button>
        </div>
        <table className='table'> 
          <thead>
            <tr className='table-thead-tr'>
              <th>id</th>
              <th>name</th>
              <th>type</th>
              <th>dimension</th>
              <th>url</th>
              <th>created</th>
            </tr>  
          </thead>
           {location != null ? (
              location.map((x) => 
              <tbody key={x.id}>
                <tr className='table-tbody-tr'>
                  <td>{x.id}</td>
                  <td>{x.name}</td>
                  <td>{x.type}</td>
                  <td>{x.dimension}</td>
                  <td>{x.url}</td>
                  <td>{x.created}</td>
                </tr>
              </tbody>
              )
            ) : ('Loading locations...')}
        </table>
      </div>
    </div>
  )
}

export default ListLocation
