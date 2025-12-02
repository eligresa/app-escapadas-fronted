import data from "../assets/data/escapadas.json"
import { Link } from "react-router-dom"
function ListaRutas() {
  return (
    <>
      <h2>Estas son las escapadas dia de hoy</h2>
      <div className="escapadas">
        {
          data.map((item, index) => (
            <div key={index}>
              <figure>
                <img src={item.original} alt="" />
              </figure>
              <Link to={`/ruta/${index}`}>{item.description}</Link>
              <p>{item.fecha}</p>
            </div>
          )
          )
        }
      </div>
    </>
  )
}
export default ListaRutas