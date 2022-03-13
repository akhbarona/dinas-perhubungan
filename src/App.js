import Home from './components/pages/Home';
import VisiMisi from './components/pages/VisiMisi';
import Navbars from './components/layouts/Navbars';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Header from './components/layouts/Header';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './App.css';
import Footer from './components/layouts/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import Articles from './components/pages/Articles';
import DetailsArticles from './components/pages/DetailsArticles';
import PhotoGalleries from './components/pages/PhotoGalleries';
import VideoGalleries from './components/pages/VideoGalleries';
import Documents from './components/pages/Documents';
import News from './components/pages/News';
import DetailsNews from './components/pages/DetailsNews';
import PDFViewer from './components/pages/PDFViewer';
import HalamanStatis from './components/pages/HalamanStatis';
import PagesNotFound from './components/pages/PagesNotFound';

import axios from 'axios';
import { useEffect, useState } from 'react';
function App() {
  const [Instansi, setInstansi] = useState(0);
  useEffect(() => {
    axios
      .get('http://adminmesuji.embuncode.com/api/instansi/detail/2')
      .then(function (response) {
        setInstansi(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  return (
    <Router onUpdate={() => window.scrollTo(0, 0)}>
      <Header data={Instansi} />
      <Container className="clear-white">
        <Row className="mail-map">
          <Col className="h-logo" lg={5} md={12}>
            <Nav.Link className="f-size" as={Link} to="/">
              <div className="logo-size">
                <img className="logo" src={`${Instansi.logo_instansi}`} alt="logo" key="1" />
                <div className="title-logo">
                  <h1>{Instansi.nama_instansi}</h1>
                </div>
              </div>
            </Nav.Link>
          </Col>
          <Col lg={7} md={12} className="header-icon">
            <div className="header-info-wrapper">
              <div className="header-info-item">
                <span className="icon-fa">
                  <FontAwesomeIcon icon={faEnvelope} size="2x" />
                </span>
                <div className="info-inner-wrap">
                  <span>E-mail us ?</span>
                  <a href={`mailto:${Instansi.email}`}>{Instansi.email}</a>
                </div>
              </div>
              <div className="header-info-item">
                <span className="icon-fa">
                  <FontAwesomeIcon icon={faPhone} size="2x" />
                </span>
                <div className="info-inner-wrap">
                  <span>Call us ?</span>
                  <a target="_blank" href="#">
                    {Instansi.nomor_telepon}
                  </a>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <Navbars />
      <div className="main-container">
        <Routes>
          <Route exact path="/" element={<Home data={Instansi} />} />
          <Route path="/informasi/visi-dan-misi" element={<VisiMisi />} />
          <Route exact path="/article" element={<Articles />} />
          <Route path="/article/details/:id" element={<DetailsArticles />} />
          <Route exact path="/news" element={<News />} />
          <Route path="/news/details/:id" element={<DetailsNews />} />
          <Route path="/foto" element={<PhotoGalleries />} />
          <Route path="/video" element={<VideoGalleries />} />
          <Route path="/document" element={<Documents />} />
          <Route path="/pdf/:slug/:filename" element={<PDFViewer />} />
          <Route exact path="/static/:id" element={<HalamanStatis />} />
          <Route path="*" element={<PagesNotFound />} />
        </Routes>
      </div>
      <Footer data={Instansi} />
    </Router>
  );
}

export default App;
