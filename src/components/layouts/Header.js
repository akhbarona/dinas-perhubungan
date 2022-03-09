import { Row, Col, Container } from 'react-bootstrap';
import moment from 'moment/min/moment-with-locales';

function Header(props) {
  return (
    <header>
      <div className="header-top">
        <Container>
          <Row>
            <Col className="col top-left ">
              <div className="ticker-wrapper-v">
                <div className="heading-c">Recent News</div>
                <ul className="news-ticker-v">
                  <li>
                    <a href="">1. What is Lorem Ipsum?</a>
                  </li>
                  <li>
                    <a href="">2. Why do we use it?</a>
                  </li>
                  <li>
                    <a href="">3. Where does it come from?</a>
                  </li>
                  <li>
                    <a href="">4. Where can I get some?</a>
                  </li>
                  <li>
                    <a href="">5. The last news item</a>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="header-time">
        <Container>
          <Row>
            <Col className="col-md-6 font-type">{moment().format('dddd, Do MMMM YYYY  ')}</Col>
            <Col className="col top-right">
              <div className="icon-header">
                <a href={props.data.facebook}>
                  <i className="fab fa-facebook-f facebook-bg" />
                </a>
                <a href={props.data.youtube}>
                  <i className="fab fa-youtube youtube-bg" />
                </a>
                <a href={props.data.instagram}>
                  <i className="fab fa-instagram instagram-bg" />
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </header>
  );
}

export default Header;
