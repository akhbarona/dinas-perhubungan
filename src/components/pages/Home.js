import Slides from '../layouts/Slides';
import { Row, Col, Card, Container } from 'react-bootstrap';
import dummySlide from '../image/dummySlide.png';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment/min/moment-with-locales';
function Home() {
  const [DataResponse, setDataResponses] = useState(null);

  useEffect(() => {
    axios
      .get('http://adminmesuji.embuncode.com/api/news?instansi_id=2&sort_by=created_at&sort_type=desc&per_page=3')
      .then(function (response) {
        setDataResponses(response.data.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  function handleLength(value, lengths) {
    if (value.length < lengths) {
      return value;
    } else {
      return value.substring(0, lengths).substring(0, value.substring(0, lengths).lastIndexOf(' ')) + '...';
    }
  }

  return (
    <>
      <Slides />

      {/* Berita Terbaru */}
      <section className="section ">
        <Container>
          <Row>
            <Col md={12}>
              <h3 className="main-heading">Berita Terbaru</h3>
              <Row xs={1} md={3} className="g-4">
                {DataResponse &&
                  DataResponse.map((item, index) => {
                    return (
                      <Col key={index}>
                        <Card className="card-shadow card-size">
                          <Card.Img className="card-img" variant="top" src={item.image_file_data} />
                          <Card.Body>
                            <Card.Title>{handleLength(item.title, 35)}</Card.Title>
                            <p className="meta-info">
                              <a href="#" className="text-muted">
                                {moment(item.created_at).format('dddd, Do MMMM YYYY  ')}
                              </a>
                              <a href="#" className="text-muted" style={{ marginLeft: 10 }}>
                                {item.total_hit}x dibaca
                              </a>
                              <a href="#" className="text-muted" style={{ marginLeft: 10 }}>
                                {item.news_category_id}
                              </a>
                            </p>
                            <p className="card-text">
                              <small className="text-muted">Diposting {(moment.locale('id-ID'), moment(item.created_at).fromNow())}</small>
                            </p>

                            <Card.Text
                              className="pt-1 pb-4 text-article"
                              dangerouslySetInnerHTML={{
                                __html: `${handleLength(item.intro, 120)}`,
                              }}
                            >
                              {/* <div dangerouslySetInnerHTML={{ __html: handleLength(item.intro, 150) + '...' }} /> */}
                            </Card.Text>
                            <Link to={`/news/details/${item.id}`}>Baca Selengkapnya</Link>
                          </Card.Body>
                        </Card>
                      </Col>
                    );
                  })}
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Pemberitahuan */}

      <section className="section bg-light">
        <Container>
          <div className="md-12">
            <h3 className="main-heading">Berita Umum</h3>
            <Row>
              <Col md={7}></Col>

              <Col md={5}>
                <div className="list-news-container">
                  <div className="main-content">
                    <ul className="list-news">
                      <li className="list-news__item news">
                        <h5 className="news__title">Turn the web into database: An alternative to webcrawling</h5>
                        <p className="news__info">
                          <span>2 hours ago</span>
                          <span className="news__cmt">15 comments</span>
                        </p>
                      </li>
                      <li className="list-news__item news">
                        <h5 className="news__title">Turn the web into database: An alternative to webcrawling</h5>
                        <p className="news__info">
                          <span>2 hours ago</span>
                          <span className="news__cmt">15 comments</span>
                        </p>
                      </li>
                      <li className="list-news__item news">
                        <h5 className="news__title">Turn the web into database: An alternative to webcrawling</h5>
                        <p className="news__info">
                          <span>2 hours ago</span>
                          <span className="news__cmt">15 comments</span>
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>

      {/* react-owl-carousel */}
    </>
  );
}

export default Home;
