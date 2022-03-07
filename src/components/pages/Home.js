import Slides from '../layouts/Slides';
import { Row, Col, Card, Container } from 'react-bootstrap';
import dummySlide from '../image/dummySlide.png';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment/min/moment-with-locales';
function Home() {
  const [DataResponse, setDataResponses] = useState(null);
  const [BeritaUmum, setBeritaUmum] = useState(null);

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

  function handleLength(value, lengths) {
    if (value.length < lengths) {
      return value;
    } else {
      return value.substring(0, lengths).substring(0, value.substring(0, lengths).lastIndexOf(' ')) + '...';
    }
  }

  return (
    <>
      <Container>
        <Slides />
      </Container>
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
              <Col md={7}>
                <h3 className="main-heading">Berita Terpopuler</h3>
                <div className="daily-news-container">
                  <div className="daily-content">
                    <ul className="daily-news">
                      <li className="daily-news__item">
                        <div class="cards-daily">
                          <div class="card-daily content">
                            <div class="card-daily-content">
                              <div class="card-daily-img">
                                <img src="https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80" alt="Gamer" />
                              </div>
                              <div class="card-daily-label">E-Sports</div>
                              <div class="card-daily-title">Fnatic raises $19 million, shakes up leadership team</div>
                            </div>
                          </div>
                          <div class="card-daily content">
                            <div class="card-daily-content">
                              <div class="card-daily-img">
                                <img src="https://images.unsplash.com/photo-1547394765-185e1e68f34e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" alt="keyboard" />
                              </div>
                              <div class="card-daily-label">Technology</div>
                              <div class="card-daily-title">Google Stadia: The Future of Gaming</div>
                            </div>
                          </div>
                          <div class="card-daily content">
                            <div class="card-daily-content">
                              <div class="card-daily-img">
                                <img src="https://images.unsplash.com/photo-1519326844852-704caea5679e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2034&q=80" alt="Controller" />
                              </div>
                              <div class="card-daily-label">Consoles</div>
                              <div class="card-daily-title">PS5 won't launch before mid-2020</div>
                            </div>
                          </div>
                          <div class="card-daily content">
                            <div class="card-daily-content">
                              <div class="card-daily-img">
                                <img src="https://images.unsplash.com/photo-1519326844852-704caea5679e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2034&q=80" alt="Controller" />
                              </div>
                              <div class="card-daily-label">Consoles</div>
                              <div class="card-daily-title">PS5 won't launch before mid-2020</div>
                            </div>
                          </div>
                          <div class="card-daily content">
                            <div class="card-daily-content">
                              <div class="card-daily-img">
                                <img src="https://images.unsplash.com/photo-1519326844852-704caea5679e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2034&q=80" alt="Controller" />
                              </div>
                              <div class="card-daily-label">Consoles</div>
                              <div class="card-daily-title">PS5 won't launch before mid-2020</div>
                            </div>
                          </div>
                          <div class="card-daily content">
                            <div class="card-daily-content">
                              <div class="card-daily-img">
                                <img src="https://images.unsplash.com/photo-1519326844852-704caea5679e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2034&q=80" alt="Controller" />
                              </div>
                              <div class="card-daily-label">Consoles</div>
                              <div class="card-daily-title">PS5 won't launch before mid-2020</div>
                            </div>
                          </div>
                          <div class="card-daily content">
                            <div class="card-daily-content">
                              <div class="card-daily-img">
                                <img src="https://images.unsplash.com/photo-1519326844852-704caea5679e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2034&q=80" alt="Controller" />
                              </div>
                              <div class="card-daily-label">Consoles</div>
                              <div class="card-daily-title">PS5 won't launch before mid-2020</div>
                            </div>
                          </div>
                          <div class="card-daily content">
                            <div class="card-daily-content">
                              <div class="card-daily-img">
                                <img src="https://images.unsplash.com/photo-1519326844852-704caea5679e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2034&q=80" alt="Controller" />
                              </div>
                              <div class="card-daily-label">Consoles</div>
                              <div class="card-daily-title">PS5 won't launch before mid-2020</div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="daily-news__item">
                        <h3 className="daily__title">Hello World</h3>
                        <p className="daily__info">
                          <span>2 hours ago, umum</span>
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </Col>

              <Col md={5}>
                <h3 className="main-heading">Berita Umum</h3>
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
              <img src="https://upload.wikimedia.org/wikipedia/commons/8/82/Eva_dwiyana_mayor.png" />
            </Col>
            <Col md={8} className="rest">
              {/* <h2 className="kata-pembuka-news">Assalamu'alaikum Warahmatullahi Wabarakatuh</h2>
              <p>Salam Sejahtera untuk Kita Semua</p>
              <p>
                Puji syukur ke hadirat Allah Subhanallahu Wa Taala, karena atas ridho-Nya Dinas Pertanian dan Ketahanan Pangan Provinsi Jawa Timur berupaya memberikan informasi-informasi terkait dunia pertanian dan pangan melalui media
                website. Hal ini selaras dengan Visi Misi Ibu Gubernur dan Bapak Wakil Gubernur Jawa Timur yang tertuang dalam Nawa Bhakti Satya di Bidang Pertanian dan Ketahanan Pangan yaitu Jatim Agro, maka pelayanan publik baik berupa
                informasi, program, maupun layanan diharapkan dapat disajikan ke publik secara Cepat, Efektif, Tanggap, Transparan, dan Responsif..
              </p>
              <h2 className="kata-penutup-news">Wassalamu 'Alaikum Warahmatullahi Wabarakatuh</h2>
              <div className="nama-kpla">
                <h2 className="kata-penutup-news">Kepala Dinas Pertanian dan Ketahanan Pangan Provinsi Jawa Timur</h2>
                <h2 className="kepala-dinas">Dr. Ir. Hadi Sulistyo, M.Si</h2>
              </div> */}
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
                  <a className="btn-more" href="#">
                    See More
                  </a>
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
