import { MapContainer, TileLayer, Marker, ZoomControl } from 'react-leaflet'
import { Icon } from 'leaflet'
import 'leaflet/dist/leaflet.css'

export const Map = () => {
  const mapMarkIcon = new Icon({
    iconUrl: 'map-marker.png',
    iconSize: [47, 55]
  })

  return (
    <div
      style={{
        width: '100%',
        height: '100vh'
      }}
    >
      <MapContainer
        center={[0, 0]}
        zoom={3}
        zoomControl={false}
        attributionControl={false}
        style={{ width: '100%', height: '100%' }}
      >
        <TileLayer url="https://mt0.google.com/vt/lyrs=m&hl=en&x={x}&y={y}&z={z}" />
        <Marker icon={mapMarkIcon} position={[0, 0]} />
        <ZoomControl position="bottomright" />
      </MapContainer>
    </div>
  )
}
