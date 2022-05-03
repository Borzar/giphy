import { useEffect, useState } from "react"
import { episodeListPage } from '../services/functions'
import { Link } from 'react-router-dom'
import Title from "./Title"
import Navbar from "./Navbar"
import '../css/List.css'

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
      <div className='list-of'>
        <h3>Lista de episodios</h3>
        <div> 
          <button onClick={prevPage}>Prev</button>
          {page}
          <button onClick={nextPage}>Next</button>
        </div>
        <table> 
          <thead>
            <tr>
              <th>id</th>
              <th>name</th>
              <th>air_date</th>
              <th>episode</th>
              <th>url</th>
              <th>created</th>
            </tr>  
          </thead>
           {episode != null ? (
              episode.map((x) => 
              <tbody key={x.id}>
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
            ) : ('Loading episodes...')}
        </table>
      </div>
    </div>
  )
}

export default ListEpisodes
