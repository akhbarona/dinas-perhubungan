import Slides from '../layouts/Slides';
import { Row, Col, Card, ListGroup } from 'react-bootstrap';
import dummySlide from '../image/dummySlide.png';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

function Home() {
  const content =
    'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.';
  const MAX_LENGTH = 150;
  const settings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    centerPadding: '60px',
    slidesToShow: 5,
    slidesToScroll: 1,
    pauseOnHover: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
  };
  return (
    <>
      <Slides />

      {/* Berita Terbaru */}
      <section className="section ">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h3 className="main-heading">Berita Terbaru</h3>
              <Row xs={1} md={3} className="g-4">
                {Array.from({ length: 3 }).map((_, idx) => (
                  <Col>
                    <Card className="shadow">
                      <Card.Img variant="top" src={dummySlide} />
                      <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <p class="card-text">
                          <small class="text-muted">Diposting 19 menit lalu</small>
                        </p>
                        {content.length > MAX_LENGTH ? (
                          <>
                            <Card.Text>{`${content.substring(0, MAX_LENGTH)}...`}</Card.Text>
                            <a href="#">Read more</a>
                          </>
                        ) : (
                          <Card.Text>{content}</Card.Text>
                        )}
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
                <Col>Apanih isinya ya apalagi kalau bukan list sidebar</Col>
              </Row>
            </div>
          </div>
        </div>
      </section>

      {/* Pemberitahuan */}

      <section className="section bg-light">
        <div className="container">
          <div className="md-12">
            <h3 className="main-heading">Berita Umum</h3>
            <div className="row ">
              <div className="col-md-7 "></div>

              <div className="col-md-5 ">
                <div className="horizontal-card">
                  <img src={dummySlide}></img>
                  <div className="horizontal-card-body">
                    <h4 class="card-title">Penggunaan Bukti Lulus Uji Berkala Kendaraan...</h4>
                    <p>
                      <span class="card-text">Subtitle This is a longer card with supporting text</span>
                    </p>
                    <small class="text-muted">Diposting 19 menit lalu</small>
                  </div>
                </div>
                <div className="horizontal-card">
                  <img src={dummySlide}></img>
                  <div className="horizontal-card-body">
                    <h4 class="card-title">Penggunaan Bukti Lulus Uji Berkala Kendaraan...</h4>
                    <p>
                      <span class="card-text">Subtitle This is a longer card with supporting text</span>
                    </p>
                    <small class="text-muted">Diposting 19 menit lalu</small>
                  </div>
                </div>
                <div className="horizontal-card">
                  <img src={dummySlide}></img>
                  <div className="horizontal-card-body">
                    <h4 class="card-title">Penggunaan Bukti Lulus Uji Berkala Kendaraan...</h4>
                    <p>
                      <span class="card-text">Subtitle This is a longer card with supporting text</span>
                    </p>
                    <small class="text-muted">Diposting 19 menit lalu</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* react-slick  */}
      <section className="section">
        <div className="container">
          <Slider {...settings}>
            <div>
              <img className="img-react-slick" src="partners/adidas.png" alt="logo" />
            </div>
            <div>
              <img className="img-react-slick" src="partners/facebook.png" alt="logo" />
            </div>
            <div>
              <img className="img-react-slick" src="partners/google.png" alt="logo" />
            </div>
            <div>
              <img className="img-react-slick" src="partners/instagram.png" alt="logo" />
            </div>
            <div>
              <img className="img-react-slick" className="img-react-slick" src="partners/nike.png" alt="logo" />
            </div>
            <div>
              <img className="img-react-slick" src="partners/twitter.png" alt="logo" />
            </div>
          </Slider>
        </div>
      </section>

      {/* Galeri */}
      <section>
        <div className="container"></div>
      </section>
    </>
  );
}

export default Home;
