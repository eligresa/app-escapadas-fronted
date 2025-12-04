
// import { MapContainer, Marker, TileLayer } from "react-leaflet"
import { useState, useRef, useEffect } from "react"
import emailjs from "@emailjs/browser"
// import "leaflet/dist/leaflet.css"

export default function AgregarRuta() {
    const formRef = useRef()
    const position = [40.4074, -3.6885]
    const [nombre, setNombre] = useState('')
    const [email, setEmail] = useState('')
    const [propuesta, setPropuesta] = useState('')
    const [fecha, setFecha] = useState('')
    const [hora, setHora] = useState('')
    const [precio, setPrecio] = useState(0)
    const [lat, setLat] = useState(position[0])
    const [lng, setLng] = useState(position[1])
    const [observaciones, setObservaciones] = useState('')
    const [respuesta, setRespuesta] = useState('')
    const submitEmail = async (e) => {
        e.preventDefault();
        
        //Reseteamos con un relojito:
        setRespuesta('Enviando....')

        try {
            const result = await emailjs.sendForm(
                "service_w1rqxt7",     // ← pon tu SERVICE ID
                "template_iqred5n",    // ← pon tu TEMPLATE ID
                formRef.current,
                "OspEKpYD1UlKsa6hR"      // ← tu PUBLIC KEY
            );

            setRespuesta(result.text + "Mensaje enviado correctamente");

        } catch (error) {

            setRespuesta(result.text + "Ha habido un error al enviar el mensaje");
        }

    };
    return (
        
        <>
        <h2>Propuesta de rutas</h2>
        <p>Aqui podrás sugerirnos tus propias rutas y cuándo podríamos hacerlas</p>
            {respuesta && <p className="respuesta"> {respuesta}</p>}
            
                <form id="formulario" ref={formRef} onSubmit={submitEmail}>
                    <div >
                        <label htmlFor="nombre">Nombre:</label>
                        <input onChange={(e) => setNombre(e.target.value)} type="text" name="nombre" id="nombre" />
                    </div>
                    <div >
                        <label htmlFor="email">Email:</label>
                        <input onChange={(e) => setEmail(e.target.value)} type="text" name="email" id="email" />
                    </div>
                    <div>
                        <label htmlFor="propuesta">Propuesta:</label>
                        <input onChange={(e) => setPropuesta(e.target.value)} type="text" name="propuesta" id="propuesta" />
                    </div>
                    <div>
                        <label htmlFor="fecha">Fecha:</label>
                        <input onChange={(e) => setFecha(e.target.value)} type="date" name="fecha" id="fecha" />
                    </div>

                    <div id="latlng">
                        <label htmlFor="lat">Latitud:</label>
                        <input onChange={(e) => setLat(e.target.value)} value={lat} type="text" name="lat" id="lat" />
                        <label htmlFor="lng">Longitud:</label>
                        <input onChange={(e) => setLng(e.target.value)} value={lng} type="text" name="lng" id="lng" />
                    </div>

                    <div>
                        <label htmlFor="hora">Hora:</label>
                        <input onChange={(e) => setHora(e.target.value)} type="time" name="hora" id="hora" />
                    </div>
                    <div>
                        <label htmlFor="precio">Precio:</label>
                        <input onChange={(e) => setPrecio(e.target.value)} type="text" name="precio" id="precio" />
                    </div>
                    <div>
                        <label htmlFor="observaciones">Observaciones:</label>
                        <textarea onChange={(e) => setObservaciones(e.target.value)} name="observaciones" id="observaciones"></textarea>
                    </div>
                    <button id="btn">Enviar</button>
                </form>

           
        </>
    )
}

