import ImageGallery from "react-image-gallery"
import "react-image-gallery/styles/css/image-gallery.css"
import { useNavigate } from "react-router-dom";
import escapadas from "../assets/data/escapadas.json"


function reDirigir(e) {
  const navigate = useNavigate()
  navigate("/rutas")

}
export default function Gallery() {
  return (
    <>
      <div className="gallery">
        <ImageGallery items={escapadas} autoPlay={true} thumbnailPosition="bottom" onClick={reDirigir} /></div>
    </>
  )
}
