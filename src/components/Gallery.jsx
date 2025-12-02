import ImageGallery from "react-image-gallery"
import "react-image-gallery/styles/css/image-gallery.css"
import { useNavigate, Link } from "react-router-dom";
import escapadas from "../assets/data/escapadas.json"



export default function Gallery() {
  const navigate = useNavigate()
  function reDirigir() {
    navigate("lista-rutas/")

  }
  return (
    <>
      <div className="gallery">
        <ImageGallery items={escapadas} autoPlay={true} thumbnailPosition="bottom" onClick={reDirigir} />
      </div>
    </>
  )
}
