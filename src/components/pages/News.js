import { Row, Col, Container, ListGroup, Badge, Pagination, Spinner } from 'react-bootstrap';
import axios from 'axios';
import { useEffect, useState, useCallback, Fragment, useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import moment from 'moment';
import 'moment/locale/id';

function News() {
  const [DataResponse, setDataResponses] = useState(0);

  const [IPages, setIPages] = useState([]);
  let iPages = [];
  const [, updateState] = useState();
  const forceUpdate = useCallback(() => updateState({}), []);
  const [Categories, setDataCategories] = useState([]);
  const [PostPopular, setPostPopular] = useState([]);
  const [NewsCategories, setNewsCategories] = useState();
  const [IsAda, setIsAda] = useState(0);
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  useEffect(() => {
    axios
      .get('http://adminmesuji.embuncode.com/api/news/categories/2')
      .then(function (response) {
        setDataCategories(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    axios
      .get('http://adminmesuji.embuncode.com/api/news?instansi_id=2&per_page=5&sort_type=desc&sort_by=total_hit')
      .then(function (response) {
        setPostPopular(response.data.data.data);
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

  useEffect(() => {
    gettingData(1);
  }, []);
  // let tooglePaginate = true;
  function gettingData(page, slug, title) {
    let urlTitle = '';
    if (title != null) {
      urlTitle = '&title=' + title;
    } else {
      urlTitle = '';
    }
    setDataResponses(null);
    let url = '';
    if (slug == null) {
      url = 'http://adminmesuji.embuncode.com/api/news?instansi_id=2' + urlTitle + '&per_page=4&page=' + page;
    } else {
      url = 'http://adminmesuji.embuncode.com/api/news?instansi_id=2' + urlTitle + '&per_page=4&slug=' + slug + '&page=' + page;
    }
    axios
      .get(url)
      .then(function (response) {
        setDataResponses(response.data.data.data);

        iPages = [];

        for (let number = 1; number <= response.data.data.last_page; number++) {
          iPages.push(
            <Pagination.Item
              onClick={() => {
                slug == null ? gettingData(number) : gettingData(number, slug);
              }}
              key={number}
              active={number === response.data.data.current_page}
            >
              {number}
            </Pagination.Item>
          );
          setIPages(iPages);
        }

        forceUpdate();

        setIsAda(response.data.data.total);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  function handleNewsChange(newsSlug) {
    gettingData(1, newsSlug);

    setNewsCategories(newsSlug);
  }

  function handleSearchChange(value) {
    if (value.key === 'Enter') {
      if (value.target.value !== '') {
        gettingData(1, null, value.target.value);
      } else {
        gettingData(null, null);
      }
    }
  }

  return (
    <section className="section bg-light">
      <Container>
        <Row>
          <Col lg={8} md={12} sm={12} xs={12}>
            <Row>
              {DataResponse !== null ? (
                IsAda !== 0 ? (
                  DataResponse &&
                  DataResponse.map((item, index) => {
                    return (
                      <Col md={12} key={index}>
                        <Col md={12}>
                          <div className="blog-card w-100">
                            <div className="meta">
                              <div className="photo" style={{ backgroundImage: 'url(' + item.image_file_data + ')' }}></div>
                            </div>
                            <div className="description">
                              <h3>{handleLength(item.title, 40)}</h3>
                              <div className="pt-2 pb-2 meta-tag">
                                <Link className="read-more-size" to="#">
                                  <i className="fa-solid fa-calendar"></i>

                                  {moment(item.created_at).format('Do MMMM YYYY  ')}
                                </Link>
                                <Link className="read-more-size" to="#">
                                  <i className="fa-solid fa-tag"></i>
                                  {item.news_category_id}
                                </Link>
                                <Link className="read-more-size x-eyes" to="#">
                                  <i className="fa-solid fa-eye"></i>
                                  {item.total_hit}
                                </Link>
                              </div>

                              <p
                                className="pt-1 pb-4 text-news"
                                dangerouslySetInnerHTML={{
                                  __html: `${handleLength(item.intro, 120)}`,
                                }}
                              ></p>

                              <p className="read-more">
                                <Link className="read-more-right" to={`/news/details/${item.id}`}>
                                  Baca Selengkapnya
                                </Link>
                              </p>
                            </div>
                          </div>
                        </Col>
                      </Col>
                    );
                  })
                ) : (
                  <h2>Data tidak ada</h2>
                )
              ) : (
                <Spinner animation="border" role="status" className="m-auto">
                  <span className="visually-hidden">Loading...</span>
                </Spinner>
              )}
              <Col md={12}>
                <Pagination>{IPages}</Pagination>
              </Col>
            </Row>
          </Col>
          <Col lg={4} md={12} sm={12} xs={12}>
            <div className="sidebar sidebar-right">
              <div className="seacrh-widget">
                <div className="has-search">
                  <span className="form-control-feedback">
                    <FontAwesomeIcon icon={faSearch} size="1x" />
                  </span>
                  <input className="searching-data" onKeyDown={handleSearchChange} type="text" placeholder="Search Articles" />
                </div>
              </div>
              <div className="single-sidebar category-widget">
                <div className="title">
                  <h3>Kategori News</h3>
                </div>

                <div id="category" className="category-list">
                  <ListGroup as="ol">
                    {Categories &&
                      Categories.map((value, idx) => {
                        return (
                          <Fragment key={idx}>
                            {NewsCategories === value.slug ? (
                              <ListGroup.Item as="li" onClick={() => handleNewsChange(value.slug)} className="d-flex justify-content-between align-items-start kategori-list-article kategori-list-article-active" key={idx}>
                                <div className="me-auto">{value.nama_kategori}</div>
                                <Badge variant="primary" pill>
                                  {value.news_count}
                                </Badge>
                              </ListGroup.Item>
                            ) : (
                              <ListGroup.Item as="li" onClick={() => handleNewsChange(value.slug)} className="d-flex justify-content-between align-items-start kategori-list-article " key={idx}>
                                <div className="me-auto">{value.nama_kategori}</div>
                                <Badge variant="primary" pill>
                                  {value.news_count}
                                </Badge>
                              </ListGroup.Item>
                            )}
                          </Fragment>
                        );
                      })}
                  </ListGroup>
                </div>
              </div>
              <div className="recent-post-widget">
                <div className="title-widget">
                  <h3>Populer News</h3>
                </div>
                <div id="popular" className="recent-post-list">
                  <ul className="popular-post-style">
                    {PostPopular &&
                      PostPopular.map((item, index) => {
                        return (
                          <li key={index} className="popular-post-item" tabIndex={index}>
                            <Link className="popular-post-item-title" title={item.title} to={`/news/details/${item.id}`}>
                              <img alt={item.news_category_id} className="popular-post-item-thumbnail" src={item.image_file_data} title={item.title} />
                            </Link>
                            <div className="popular-post-item-tooltip">
                              <Link className="popular-post-item-title" title={item.title} to={`/news/details/${item.id}`}>
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
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default News;
