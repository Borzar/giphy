import { onlyLocation } from "../services/functions"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import '../css/Location.css'

const Location = () => {
	const [location, setLocation] = useState(null)
	const params = useParams()

	useEffect(() => {
		onlyLocation(params.id, setLocation)	
	},[])

	return (
		<div className='main-location'>
			{
				location != null ? (
					<div>
						<p>{location.id}</p>
						<p>{location.name}</p>
						<p>{location.type}</p>
						<p>{location.dimension}</p>
						<p>{location.created}</p>
					</div>
				) : ('Cargando Ubicacion')
			}
		</div>

	)
}

export default Location
