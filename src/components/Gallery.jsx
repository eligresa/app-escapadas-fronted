import ImageGallery from "react-image-gallery"
import "react-image-gallery/styles/css/image-gallery.css"
import { useNavigate } from "react-router-dom";
const images = [
  {
    original: "https://picsum.photos/id/1018/1000/600/",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
];
function reDirigir(e){
    window.location.href="rutas"
    console.log(e)

}
export default function Gallery() {
  return (
    <>
    <div className="gallery">
    <ImageGallery  items={images} autoPlay={true} thumbnailPosition="bottom" onClick={reDirigir} /></div>
    </>
  )
}
