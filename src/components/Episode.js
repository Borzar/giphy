import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { singleEpisode } from '../services/functions'
import Navbar from "./Navbar"
import Title from "./Title"

const Episode = () => {
  const params = useParams()
  const [episode, setEpisode] = useState(null)

  useEffect(() => {
    singleEpisode(params.id, setEpisode)
  }, [])

  return(
    <div>
      <Title />
      <Navbar />
      <div>
        {
          episode != null ? (
              <table>
                <tr>
                  <th>id</th>
                  <th>name</th>
                  <th>episode</th>
                  <th>created</th>
                  <th>air_date</th>
                </tr>
                <tr>
                  <td>{episode.id}</td>
                  <td>{episode.name}</td>
                  <td>{episode.episode}</td>
                  <td>{episode.created}</td>
                  <td>{episode.air_date}</td>
                </tr>
              </table>
            )
           : ('Loading episode...')
        }
      </div>
    </div>   
  )
}

export default Episode
