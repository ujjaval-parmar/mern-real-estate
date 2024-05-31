import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'


import './map.scss';
import 'leaflet/dist/leaflet.css'
import Pin from '../pin/Pin';
const position = [23.0225, 72.5714]

const Map = ({ items }) => {

    console.log(items)
    return (

        <MapContainer center={items.length===0 ? [items[0].latitude, items[0].longitude] : position} zoom={10} scrollWheelZoom={true} className='map'>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {items.map(item => {
                
                return (
                   <Pin item={item} key={item._id} />
                )
            })}
        </MapContainer>

    )
}

export default Map