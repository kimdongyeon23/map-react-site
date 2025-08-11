    import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
    import 'leaflet/dist/leaflet.css'
    import L from 'leaflet'

    delete L.Icon.Default.prototype._getIconUrl
    L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png',
    iconUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png',
    })

export function MapView({ handleMainMarker, handleLikeMarker, mapSize, tabMainPlaces=[], tabLikePlaces = []}) {
    return (
        <>
            <MapContainer center={[40.7128, -74.006]} zoom={13} style={mapSize}>
            <TileLayer
                attribution='&copy; OpenStreetMap contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            
            {tabMainPlaces.map((place1) => (
                <Marker eventHandlers={{click:()=>{
                    handleMainMarker(place1);
            }}} 
            key={place1.id} position={[place1.latitude, place1.longitude]}>
                </Marker>
            ))}
            {tabLikePlaces.map((place) => (
                <Marker eventHandlers={{click:()=>{
                    handleLikeMarker(place);
            }}} 
            key={`like-${place.id}`} position={[place.latitude, place.longitude]}>
                </Marker>
            ))}
            </MapContainer>
        </>
    )
}
