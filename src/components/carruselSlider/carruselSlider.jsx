import Carousel from 'react-bootstrap/Carousel';
import "./carruselSlider.css"

function CarouselSlider() {
  return (
    <Carousel fade className='carrusel'>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.banifox.com/imagenes/img_contenido/parrafos/a/geforce_4090.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Nueva serie 4000 al mejor precio</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.banifox.com/imagenes/img_contenido/parrafos/a/eleva_tu_juego.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Lleva tu gaming a otro nivel con rtx</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselSlider;