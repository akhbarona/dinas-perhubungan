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
import PagesNotFound from './components/pages/PagesNotFound';
import Slide from './components/pages/Slide';

function App() {
  return (
    <div className="main-container">
      <Router onUpdate={() => window.scrollTo(0, 0)}>
        <Header />
        <Container className="clear-white">
          <Row className="mail-map">
            <Col className="h-logo" md={4}>
              <Nav.Link className="f-size" as={Link} to="/">
                <img className="logo" src={'/logo/Logo-Dishub-Lamtim.svg'} alt="logo" key="1" />
              </Nav.Link>
            </Col>
            <Col md={8} className="header-icon">
              <div className="header-info-wrapper">
                <div className="header-info-item">
                  <span className="icon-fa">
                    <FontAwesomeIcon icon={faEnvelope} size="2x" />
                  </span>
                  <div className="info-inner-wrap">
                    <span>E-mail us ?</span>
                    <a href="#">akhbarona@yahoo.com</a>
                  </div>
                </div>
                <div className="header-info-item">
                  <span className="icon-fa">
                    <FontAwesomeIcon icon={faPhone} size="2x" />
                  </span>
                  <div className="info-inner-wrap">
                    <span>Call us ?</span>
                    <a target="_blank" href="#">
                      081377641593
                    </a>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>

        <Navbars />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/informasi/visi-dan-misi" element={<VisiMisi />} />
          <Route exact path="/article" element={<Articles />} />
          {/* <Route path="/article:slug" element={<Articles />} /> */}
          {/* <Route path="/article/:slug" element={<Articles />} /> */}
          <Route path="/article/details/:id" element={<DetailsArticles />} />
          <Route exact path="/news" element={<News />} />
          <Route path="/news/details/:id" element={<DetailsNews />} />
          <Route path="/foto" element={<PhotoGalleries />} />
          <Route path="/video" element={<VideoGalleries />} />
          <Route path="/document" element={<Documents />} />
          <Route path="/slide" element={<Slide />} />

          <Route path="*" element={<PagesNotFound />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
