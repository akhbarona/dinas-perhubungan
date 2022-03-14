import Slides from '../layouts/Slides';
import { Row, Col, Card, Container } from 'react-bootstrap';
// import dummySlide from '../image/dummySlide.png';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import moment from 'moment/min/moment-with-locales';
import moment from 'moment';
import 'moment/locale/id';
function Home(props) {
  const [DataResponse, setDataResponses] = useState(null);
  const [BeritaUmum, setBeritaUmum] = useState(null);
  // const [BeritaPopuler, setBeritaPopuler] = useState(null);
  const [BoxBerita, setBoxBerita] = useState(null);
  const [TextBerita, setTextBerita] = useState(null);
  const [BoxAlbum, setBoxAlbum] = useState();
  const [DataDokumen, setDataDokumen] = useState([]);
  useEffect(() => {
    axios
      .get('http://adminmesuji.embuncode.com/api/dokumen?instansi_id=4')
      .then(function (dokumen) {
        // console.log('dokumen: ' + dokumen.data.data.data);
        setDataDokumen(dokumen.data.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  useEffect(() => {
    axios
      .get('http://adminmesuji.embuncode.com/api/news?instansi_id=4&sort_by=created_at&sort_type=desc&per_page=3')
      .then(function (response) {
        setDataResponses(response.data.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  useEffect(() => {
    axios
      .get('http://adminmesuji.embuncode.com/api/news?instansi_id=4')
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
      .get('http://adminmesuji.embuncode.com/api/news?instansi_id=4&sort_by=total_hit&sort_type=desc&per_page=7')
      .then(function (response) {
        // setBeritaPopuler(response.data.data.data);
        // console.log('Berita Umum :  ', response.data.data.data);
        rebuildBerita(response.data.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    axios
      .get('http://adminmesuji.embuncode.com/api/image-gallery?instansi_id=4')
      .then(function (response) {
        rebuildAlbum(response.data.data.data);
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
  function rebuildAlbum(response) {
    let album = [];
    let counterAlbum = 0;
    for (let i = 0; i < response.length; i++) {
      for (let k = 0; k < response[i].image_gallery_item.length; k++) {
        if (counterAlbum < 5) {
          counterAlbum++;
          album.push(response[i].image_gallery_item[k]);
        }
      }
    }
    setBoxAlbum(album);
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
                              <Link to="#" className="text-p">
                                {(moment.locale('id-ID'), moment(item.created_at).format('dddd, Do MMMM YYYY  '))}
                              </Link>
                              <Link to="#" className="text-p" style={{ marginLeft: 10 }}>
                                {item.total_hit}x dibaca
                              </Link>
                              <Link to="#" className="text-p" style={{ marginLeft: 10 }}>
                                {item.news_category_id}
                              </Link>
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
                                    {moment(item.created_at).format('Do MMMM YYYY ')}, {item.news_category_id}, {item.total_hit}x dibaca
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
                    <Link className="btn-more" to={`/news`}>
                      See More
                    </Link>
                  </span>
                </h3>
                <div className="list-news-container">
                  <div className="main-content">
                    <ul className="list-news">
                      {BeritaUmum &&
                        BeritaUmum.map((item, index) => {
                          return (
                            <li className="list-news__item " key={index}>
                              <Link className="style-detial-news" to={`/news/details/${item.id}`}>
                                <h3 className="news__title">{handleLength(item.title, 57)}</h3>
                                <p className="news__info">
                                  <span>{moment(item.created_at).startOf('hour').fromNow()}</span>
                                  <span className="news__cmt">{item.total_hit}x dibaca</span>
                                  <span className="news__cmt">{item.news_category_id}</span>
                                </p>
                              </Link>
                            </li>
                          );
                        })}
                    </ul>
                  </div>
                </div>

                <h3 className="main-heading document-label cf">
                  Dokumen
                  <span className="right">
                    <Link className="btn-more" to={`/document`}>
                      See More
                    </Link>
                  </span>
                </h3>
                <div className="dokumen-bg">
                  {DataDokumen &&
                    DataDokumen.map((item, index) => {
                      return item.dokumen_item.map((itm, idx) => {
                        return (
                          <div className="offerList" key={idx}>
                            <ul className="media">
                              {/* <img className="d-flex " src="./dokumen.jpg" alt="Generic placeholder image" /> */}
                              {/* <i className="d-flex fa-solid fa-book mr-3 image-dok"></i> */}
                              <li className="media-body">
                                <Link to={'/pdf/' + item.slug + '/' + itm.dokumen_file_name.replace(/\s/g, '')}>
                                  <h5 className="mt-0">{itm.dokumen_file_name}</h5>

                                  <p className="text_grey mb-0 ">
                                    <span className="text_blue">Created on: </span>
                                    {(moment.locale('id-ID'), moment(itm.created_at).format('LLL'))}
                                  </p>
                                </Link>
                              </li>
                            </ul>
                          </div>
                        );
                      });
                    })}
                </div>
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
              <img src={props.data.foto_kepala} alt={props.data.nama_kepala} />
            </Col>
            <Col md={8} className="rest">
              <h2 className="kata-pembuka-news"> {props.data.nama_instansi}</h2>

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
                <span className="title-label-left">Galeri Foto</span>
                <span className="right">
                  <Link className="btn-more" to={`/foto`}>
                    See More
                  </Link>
                </span>
              </h3>

              <div className="h-gallery">
                <ul className="gallery">
                  {BoxAlbum &&
                    BoxAlbum.map((item, index) => {
                      return (
                        <li key={index}>
                          <div>
                            <img src={item.image_file_data} alt={item.image_file_name} />

                            <span className="name">
                              Rexodus<span className="title">Destruction Expert</span>
                            </span>
                          </div>
                        </li>
                      );
                    })}
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Home;
