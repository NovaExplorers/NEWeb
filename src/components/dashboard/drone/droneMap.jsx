import glStyles from '../../../styles/dashboard.module.css';
import styles from '../../../styles/components/dashboard/drone/droneMap.module.css';
import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import '../../../styles/components/dashboard/drone/droneMap.extra.css'



export default function DroneMap({ data }) {


    return (
        <div className={styles.droneMapContainer}>
            <MapContainer center={data.drone.geoCords} zoom={10} scrollWheelZoom={true}>
                <TileLayer
                    attribution='© Nova Explorers & OpenStreetMap'
                    url="http://{s}.google.com/vt?lyrs=s,h&x={x}&y={y}&z={z}&hl=ar"
                    subdomains={['mt0','mt1','mt2','mt3']}
                />
                <Marker position={data.drone.geoCords} />
            </MapContainer>
        </div>
    )
}