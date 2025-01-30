import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import { Icon } from 'leaflet'
import 'leaflet/dist/leaflet.css'

type Place = {
  id: number
  name: string
  slug: string
  location: {
    latitude: number
    longitude: number
  }
}

export type MapProps = {
  places?: Place[]
}

export const Map = ({ places }: MapProps) => {
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

        {places?.map(({ id, name, location }) => {
          const { latitude, longitude } = location

          return (
            <Marker
              key={`place-${id}`}
              icon={mapMarkIcon}
              position={[latitude, longitude]}
              title={name}
            />
          )
        })}
      </MapContainer>
    </div>
  )
}
