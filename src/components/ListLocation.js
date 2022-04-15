import { useState, useEffect } from "react"
import { allLocations } from "../services/functions"
import { Link } from 'react-router-dom'

const ListLocation = () => {
  const [listLocation, setListLocation] = useState(null)

  useEffect(() => {
    allLocations(setListLocation)
  }, [])

return (
  <div>
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
    
  </div>
    )
  }

export default ListLocation
