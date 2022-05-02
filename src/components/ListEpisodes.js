import { useEffect, useState } from "react"
import { episodeListPage } from '../services/functions'
import { Link } from 'react-router-dom'
import Title from "./Title"
import Navbar from "./Navbar"
import '../css/ListEpisodes.css'

const ListEpisodes = () => {
  const [episode, setEpisode] = useState(null)
  const [page, setPage] = useState(1)

  useEffect(() => {
    episodeListPage(page, setEpisode)
  }, [page])

  const nextPage = () => {
    if (page === 3) 
      return 
    setPage(page +  1)
  }

  const prevPage = () => {
    if (page === 1) 
      return 
    setPage(page - 1)
  }

  return(
    <div>
      <Title />
      <Navbar />
      <div className='main'>
        <h3>Lista de episodios</h3>
        <table> 
          <tr>
            <th>id</th>
            <th>name</th>
            <th>air_date</th>
            <th>episode</th>
            <th>url</th>
            <th>created</th>
          </tr>
          {
            episode != null ? (
              episode.map((x) => 
              <tbody>
                <tr>
                  <td>{x.id}</td>
                  <td>{x.name}</td>
                  <td>{x.air_date}</td>
                  <td>{x.episode}</td>
                  <td>{x.url}</td>
                  <td>{x.created}</td>
                </tr>
              </tbody>

              )
            ) : ('')
          }

        </table>
        <div> 
          <button onClick={prevPage}>Prev</button>
          {page}
          <button onClick={nextPage}>Next</button>
        </div>
      </div>
    </div>
  )
}

export default ListEpisodes
