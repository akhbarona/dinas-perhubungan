import { Row, Col, Container } from 'react-bootstrap';
import moment from 'moment';
import 'moment/locale/id';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
function Header(props) {
  const [DataResponse, setDataResponses] = useState(null);

  useEffect(() => {
    axios
      .get('http://adminmesuji.embuncode.com/api/news?instansi_id=4&sort_by=created_at&sort_type=desc&per_page=5')
      .then(function (response) {
        // console.log(response.data.data.data);
        setDataResponses(response.data.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  return (
    <header>
      <div className="header-top">
        <Container>
          <Row>
            <Col className="col top-left ">
              <div className="ticker-wrapper-v">
                <div className="heading-c">BREAKING</div>
                <ul className="news-ticker-v">
                  {DataResponse &&
                    DataResponse.map((item, index) => {
                      return (
                        <li key={index}>
                          <Link className="news-ticker-a" to={`/news/details/${item.id}`}>
                            {item.title}
                          </Link>
                        </li>
                      );
                    })}
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
