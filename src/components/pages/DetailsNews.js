import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import axios from 'axios';

import moment from 'moment';
import 'moment/locale/id';
import { browserName } from 'react-device-detect';

function DetailsNews() {
  const { id } = useParams();

  // const id = window.location.href;
  // const fixId = id.split('/').pop();
  // console.log(id);
  const [DataResponse, setDataResponses] = useState(0);
  const [Loading, setLoading] = useState(false);
  const [Relatedpost, setRelatedpost] = useState([]);
  const myRef = useRef(null);
  // useLayoutEffect(() => {
  //   window.scrollTo(0, 0);
  // });
  const getIPAddress = async () => {
    const res = await axios.get('https://geolocation-db.com/json/');
    // console.log('IP' + res.data);
    // setIP(res.data.IPv4)
    console.log(res);
    axios
      .post('http://adminmesuji.embuncode.com/api/news/hit?artikel_id=' + id + '&ip=' + res.data.IPv4 + '&device=' + browserName)
      .then(function (response) {
        console.log('console ini2: ' + response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  useEffect(() => {
    getIPAddress();
  }, []);
  useEffect(() => {
    myRef.current.scrollIntoView({ behavior: 'smooth' });
    getData();
  }, [id]);

  function getData() {
    setLoading(false);
    axios
      .get('http://adminmesuji.embuncode.com/api/news/' + id)
      .then(function (response) {
        console.log(response.data.data);
        setDataResponses(response.data.data);
        setLoading(true);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  useEffect(() => {
    function relatedPost() {
      axios
        .get('http://adminmesuji.embuncode.com/api/news?instansi_id=4&slug= ' + DataResponse.news_category_id + '&per_page=5&sort_type=desc&sort_by=created_at')
        .then(function (response) {
          // console.log(response.data.data);
          setRelatedpost(response.data.data.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    relatedPost();
  }, [DataResponse.news_category_id]);

  function handleLength(value, lengths) {
    if (value.length < lengths) {
      return value;
    } else {
      return value.substring(0, lengths).substring(0, value.substring(0, lengths).lastIndexOf(' ')) + '...';
    }
  }

  return (
    <section className="mt-5 mb-3">
      <Container>
        <Row>
          <Col ref={myRef} md={12} lg={8} sm={12} xs={12} className="detail-height">
            <Row>
              {Loading ? (
                <>
                  <h2 className="detail-title">{DataResponse.title}</h2>
                  <div className="detail-meta">
                    <div className="border-meta">
                      <Link to="#" className="read-more-size">
                        <i className="fa-solid fa-calendar-days"></i>
                        {moment(DataResponse.created_at).format('Do MMMM  YYYY')}
                      </Link>
                      <Link to="#" className="read-more-size">
                        <i className="fa-solid fa-user"></i>
                        {DataResponse.created_by}
                      </Link>

                      <Link to="#" className="read-more-size x-eyes">
                        <i className="fa-solid fa-eye"></i>
                        {DataResponse.total_hit}
                      </Link>
                      <Link to="#" className="read-more-size">
                        <i className="fa-solid fa-tags"></i>
                        {DataResponse.news_category_id}
                      </Link>
                    </div>
                  </div>
                  <div className="detail-image">
                    <img className="image-resize" src={DataResponse.image_file_data} alt={DataResponse.title} />
                  </div>
                  <div className="detail-paragraf" dangerouslySetInnerHTML={{ __html: DataResponse.content }}></div>
                </>
              ) : (
                <Spinner animation="border" role="status" className="m-auto">
                  <span className="visually-hidden">Loading...</span>
                </Spinner>
              )}
            </Row>
          </Col>
          <Col md={12} lg={4} sm={12} xs={12}>
            <div className="sidebar sidebar-right">
              <div className="recent-post-widget no-margin">
                <div className="title-widget">
                  <h3>Related News</h3>
                </div>
                <div id="relatedpost" className="recent-post-list ">
                  <div className="single-related-post">
                    <ul className="related-post-style-3">
                      {Relatedpost &&
                        Relatedpost.map((item, index) => {
                          return (
                            <li key={index} className="related-post-item" tabIndex={index}>
                              <Link className="related-post-item-title" title={item.title} to={`/news/details/${item.id}`}>
                                <img alt={item.news_category_id} className="related-post-item-thumbnail" src={item.image_file_data} title={item.title} />
                              </Link>
                              <div className="related-post-item-tooltip">
                                <Link className="related-post-item-title" title={item.title} to={`/news/details/${item.id}`}>
                                  {handleLength(item.title, 75)}
                                </Link>
                              </div>
                            </li>
                          );
                        })}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default DetailsNews;
