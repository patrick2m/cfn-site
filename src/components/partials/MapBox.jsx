import { React, useRef, useEffect } from 'react'
import mapboxgl, { Marker } from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import './MapBox.scss'

mapboxgl.accessToken =
  'pk.eyJ1IjoicGF0cmljazJtIiwiYSI6ImNsMTUwbHo3dTBvcW4zY29qNmZ6NGZ5ZWMifQ.kq2w-sg55yEp8JkW933JFw'

function MapBox(props) {
  const mapContainerRef = useRef(null)

  const lat = props.latitude
  const lng = props.longitude
  const zoom = props.zoom

  // Initialize map when component mounts
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: zoom
    })

    const marker = new mapboxgl.Marker().setLngLat([lng, lat]).addTo(map)

    // Add navigation control (the +/- zoom buttons)
    map.addControl(new mapboxgl.NavigationControl(), 'top-right')

    // Clean up on unmount
    return () => map.remove()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div>
      <div className="map-container" ref={mapContainerRef} />
    </div>
  )
}

export default MapBox
