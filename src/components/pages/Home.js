import Slides from '../layouts/Slides';
import { Row, Col, Card, Container } from 'react-bootstrap';
import dummySlide from '../image/dummySlide.png';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment/min/moment-with-locales';
function Home(props) {
  const [DataResponse, setDataResponses] = useState(null);
  const [BeritaUmum, setBeritaUmum] = useState(null);
  // const [BeritaPopuler, setBeritaPopuler] = useState(null);
  const [BoxBerita, setBoxBerita] = useState(null);
  const [TextBerita, setTextBerita] = useState(null);

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
  useEffect(() => {
    axios
      .get('http://adminmesuji.embuncode.com/api/news?instansi_id=2')
      .then(function (response) {
        setBeritaUmum(response.data.data.data);
        // console.log('Berita Umum :  ', response.data.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    axios
      .get('http://adminmesuji.embuncode.com/api/news?instansi_id=2&sort_by=total_hit&sort_type=desc&per_page=7')
      .then(function (response) {
        // setBeritaPopuler(response.data.data.data);
        // console.log('Berita Umum :  ', response.data.data.data);
        rebuildBerita(response.data.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  function rebuildBerita(response) {
    let beritaImage = [];
    let beritaText = [];
    let counterBerita = 0;
    for (let i = 0; i < response.length; i++) {
      if (counterBerita <= 3) {
        counterBerita++;
        beritaImage.push(response[i]);
      } else {
        counterBerita++;
        beritaText.push(response[i]);
      }
    }
    setBoxBerita(beritaImage);
    setTextBerita(beritaText);
  }

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
              <Row xs={1} lg={3} xl={3} className="g-4">
                {DataResponse &&
                  DataResponse.map((item, index) => {
                    return (
                      <Col key={index}>
                        <Card className="card-shadow card-size">
                          <Card.Img className="card-img" variant="top" src={item.image_file_data} />
                          <Card.Body>
                            <p className="meta-info">
                              <a href="#" className="text-p">
                                {(moment.locale('id-ID'), moment(item.created_at).format('dddd, Do MMMM YYYY  '))}
                              </a>
                              <a href="#" className="text-p" style={{ marginLeft: 10 }}>
                                {item.total_hit}x dibaca
                              </a>
                              <a href="#" className="text-p" style={{ marginLeft: 10 }}>
                                {item.news_category_id}
                              </a>
                            </p>
                            <Card.Title>{handleLength(item.title, 60)}</Card.Title>
                            {/* <p className="card-text">
                              <small className="text-p">Diposting {(moment.locale('id-ID'), moment(item.created_at).fromNow())}</small>
                            </p> */}

                            <Card.Text
                              className="pt-1 pb-4 text-article"
                              dangerouslySetInnerHTML={{
                                __html: `${handleLength(item.intro, 120)}`,
                              }}
                            >
                              {/* <div dangerouslySetInnerHTML={{ __html: handleLength(item.intro, 150) + '...' }} /> */}
                            </Card.Text>
                            <p className="read-more">
                              <Link to={`/news/details/${item.id}`}>Baca Selengkapnya</Link>
                            </p>
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

      {/* Berita Umum & Hot News */}
      <section className="section">
        <Container>
          <div className="md-12">
            <Row>
              <Col md={7} className="mb-5">
                <h3 className="main-heading">Berita Terpopuler</h3>
                <div className="daily-news-container">
                  <div className="daily-content">
                    <ul className="daily-news">
                      <li className="daily-news__item">
                        <div className="cards-daily">
                          {BoxBerita &&
                            BoxBerita.map((item, index) => {
                              return (
                                <Link to={`/news/details/${item.id}`} className="card-daily content" key={index}>
                                  <div className="card-daily-content">
                                    <div className="card-daily-img">
                                      <img src={item.image_file_data} alt="Gamer" />
                                    </div>
                                    <div className="card-daily-label">{item.news_category_id}</div>
                                    <div className="card-daily-title">{handleLength(item.title, 60)}</div>
                                  </div>
                                </Link>
                              );
                            })}
                        </div>
                      </li>
                      {TextBerita &&
                        TextBerita.map((item, index) => {
                          return (
                            <li className="daily-news__item" key={index}>
                              <Link to={`/news/details/${item.id}`}>
                                <h3 className="daily__title">{item.title}</h3>
                                <p className="daily__info">
                                  <span>
                                    {moment(item.created_at).format('Do MMMM YYYY ')}, {item.news_category_id}
                                  </span>
                                </p>
                              </Link>
                            </li>
                          );
                        })}
                    </ul>
                  </div>
                </div>
              </Col>

              <Col md={5}>
                <h3 className="main-heading">
                  Berita Umum
                  <span className="right">
                    <a className="btn-more" href="#">
                      See More
                    </a>
                  </span>
                </h3>
                <div className="list-news-container">
                  <div className="main-content">
                    <ul className="list-news">
                      {BeritaUmum &&
                        BeritaUmum.map((item, index) => {
                          return (
                            <li className="list-news__item " key={index}>
                              <h3 className="news__title">{handleLength(item.title, 57)}</h3>
                              <p className="news__info">
                                <span>{moment(item.created_at).startOf('hour').fromNow()}</span>
                                <span className="news__cmt">{item.total_hit}x dibaca</span>
                                <span className="news__cmt">{item.news_category_id}</span>
                              </p>
                            </li>
                          );
                        })}
                    </ul>
                  </div>
                </div>

                <h3 className="main-heading document-label cf">
                  Dokumen
                  <span className="right">
                    <a className="btn-more" href="#">
                      See More
                    </a>
                  </span>
                </h3>
                <div className="">Hello World</div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>

      {/* Profile Pemimpin */}
      <section className="section bg-profile">
        <Container>
          <Row mb={5}>
            <Col md={4} className="u-valign-middle">
              <img src={props.data.foto_kepala} />
            </Col>
            <Col md={8} className="rest">
              <h2 className="kata-pembuka-news"> Selamat Datang di {props.data.nama_instansi}</h2>

              <p>{props.data.tentang}</p>
              <div className="nama-kpla">
                <h3 className="kepala-dinas">{props.data.nama_kepala}</h3>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Gallery */}
      <section className="section">
        <Container>
          <Row mb={5}>
            <Col md={12} className="g-valign-middle">
              <h3 className="text-center fw-bold cf">
                <span className="title-label-left">Galerry</span>
                <span className="right">
                  <Link className="btn-more" to={`/foto`}>
                    See More
                  </Link>
                </span>
              </h3>

              <div className="h-gallery">1</div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Home;
