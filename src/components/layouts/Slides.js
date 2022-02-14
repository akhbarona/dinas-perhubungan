import Carousel from 'react-bootstrap/Carousel';
// import dummySlide from '../image/dummySlide.png';

function Slides() {
  return (
    <Carousel className="carousel slide carousel-fase" fade>
      <Carousel.Item key="First slide">
        <img className="d-block w-100 img-fluid slider-item" src="slider/slide1.jpg" alt="First slide" />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item key="First slide">
        <img className="d-block w-100 img-fluid slider-item" src="slider/slide2.jpg" alt="First slide" />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item key="First slide">
        <img className="d-block w-100 img-fluid slider-item" src="slider/slide3.jpg" alt="First slide" />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slides;
