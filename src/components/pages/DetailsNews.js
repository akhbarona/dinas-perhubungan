import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, ListGroup, Badge } from 'react-bootstrap';
import axios from 'axios';
function DetailsNews() {
  const { id } = useParams();
  // const id = window.location.href;
  // const fixId = id.split('/').pop();
  console.log(id);
  const [DataResponse, setDataResponses] = useState([]);

  useEffect(() => {
    axios
      .get('http://adminmesuji.embuncode.com/api/news/' + id)
      .then(function (response) {
        console.log(response.data.data);
        setDataResponses(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [axios]);

  return (
    <section className="section">
      <Container>
        <Container>
          {console.log(DataResponse)}
          <Row>
            <Col md={8} sm={12} xs={12}>
              <Row>{<p>{DataResponse.content}</p>}</Row>
            </Col>
            <Col md={4} sm={12} xs={12}>
              <div className="sidebar sidebar-right">
                <div className="seacrh-widget">
                  <form method="get" action="">
                    <input name="keyword" type="text" placeholder="Search..." />
                    <button type="submit"></button>
                  </form>
                </div>
                <div className="single-sidebar recent-post-widget">
                  <div className="title">
                    <h3>Popular Posts</h3>
                  </div>
                  <div id="popular" className="recent-post-list">
                    <div className="single-recent-post">
                      <a href="#">
                        <h3>CEGAH KLASTER KELUARGA, TETAP JAGA KEBERSIHAN...</h3>
                      </a>
                      <small>12 September 2020</small>
                    </div>
                  </div>
                </div>
                <div className="single-sidebar category-widget">
                  <div className="title">
                    <h3>Kategori</h3>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default DetailsNews;
