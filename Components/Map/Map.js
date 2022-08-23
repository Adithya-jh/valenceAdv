import React from 'react'
import Map from 'react-map-gl';

function MapV() {
  return (
    <Map
    mapboxAccessToken = "pk.eyJ1IjoiYWRpdGh5YWpoIiwiYSI6ImNsNzVocnI1YjA5Y2Mzb25yaHJzbWwwN3QifQ.ddq01t-MSdsSW3w6-j8u0A"
    initialViewState={{
      longitude: 77.5946,
      latitude: 12.9716,
      zoom: 13,
      scrollZoom: false,
    //   12.972027, 77.603463
    }}
    style={{height: 600, cursor:'grab'}}
   
    mapStyle="mapbox://styles/mapbox/streets-v9"
    className="map-s"
  />
  )
}

export default MapV