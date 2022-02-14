import Home from './components/pages/Home';
import Profile from './components/pages/Profile';
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

function App() {
  return (
    <Router>
      <Header />

      <div className="main-container">
        <Container>
          <Row className="mail-map">
            <Col className="h-logo" md={4}>
              <Nav.Link className="f-size" as={Link} to="/">
                <img className="logo" src="logo/Logo-Dishub-Lamtim.svg"></img>
              </Nav.Link>
            </Col>
            <Col md={8}>
              <div className="header-info-wrapper">
                <div className="header-info-item">
                  <span className="icon-fa">
                    <FontAwesomeIcon icon={faEnvelope} size="2x" />
                  </span>
                  <div className="info-inner-wrap">
                    <span>E-mail us ?</span>
                    <a href="#">akhbarobna@yahoo.com</a>
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
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>

      <Footer />
    </Router>
  );
}

export default App;
