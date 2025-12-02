import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import escapadas from "../assets/data/escapadas.json"
import { Link } from "react-router-dom"

export default function Rutas() {
  const style = {
    height: "500px"
  }

  const position = [40.4074, -3.6885]

  return (
    <>
      <div >

        <MapContainer style={style} center={position} zoom={9} scrollWheelZoom={false}>

          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"

          ></TileLayer>
          {escapadas.map((item, index) => (
            // console.log(item.latlong)
            <Marker key={index} position={item.latlong}>
              <Popup>
                <p>{item.fecha}</p>
                <Link to={`/ruta/${index}`}>{item.description}</Link>
              </Popup>
            </Marker>
          ))}

        </MapContainer>

      </div >
    </>
  )
}


