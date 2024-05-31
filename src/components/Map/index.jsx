import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "./styles.css";

export default function Map({ ip, ipData }) {
  const LocationMarker = () => {
    const map = useMap();
    map.flyTo(ip === "" ? [51.505, -0.09] : [ipData.lat, ipData.lon], 13);
    return (
      <Marker position={ip === "" ? [51.505, -0.09] : [ipData.lat, ipData.lon]}>
        <Popup>You are here</Popup>
      </Marker>
    );
  };

  return (
    <MapContainer
      className="map"
      center={[51.505, -0.09]}
      zoom={13}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <LocationMarker />
    </MapContainer>
  );
}
