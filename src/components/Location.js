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
						<p><b>Id </b>{location.id}</p>
						<p><b>Name </b>{location.name}</p>
						<p><b>Type </b>{location.type}</p>
						<p><b>Dimension </b>{location.dimension}</p>
						<p><b>Created </b>{location.created}</p>
					</div>
				) : ('Cargando Ubicacion')
			}
		</div>

	)
}

export default Location
