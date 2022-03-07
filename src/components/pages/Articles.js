import { Row, Col, Container, ListGroup, Badge, Pagination, Spinner, Form, Button } from 'react-bootstrap';
import axios from 'axios';
import { useEffect, useState, useCallback, Fragment, useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
// import { useParams } from 'react-router-dom';
function Articles() {
  // const { slug } = useParams();
  const [DataResponse, setDataResponses] = useState(0);

  const [IPages, setIPages] = useState([]);
  let iPages = [];
  const [, updateState] = useState();
  const forceUpdate = useCallback(() => updateState({}), []);
  const [Categories, setDataCategories] = useState([]);
  const [PostPopular, setPostPopular] = useState([]);
  const [ArticleCategories, setArticleCategories] = useState();
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  useEffect(() => {
    axios
      .get('http://adminmesuji.embuncode.com/api/article/categories/2')
      .then(function (response) {
        setDataCategories(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    axios
      .get('http://adminmesuji.embuncode.com/api/article?instansi_id=2&per_page=5&sort_type=desc&sort_by=total_hit')
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
  function gettingData(page, slug) {
    setDataResponses(null);
    let url = '';
    if (slug == null) {
      url = 'http://adminmesuji.embuncode.com/api/article?instansi_id=2&per_page=4&page=' + page;
    } else {
      url = 'http://adminmesuji.embuncode.com/api/article?instansi_id=2&per_page=4&slug=' + slug + '&page=' + page;
    }
    axios
      .get(url)
      .then(function (response) {
        setDataResponses(response.data.data.data);
        iPages = [];
        // if (tooglePaginate) {
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
          // tooglePaginate = false;
        }
        // }
        forceUpdate();
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  function handleArticleChange(artikelSlug) {
    console.log('artikelSlug', artikelSlug);

    gettingData(1, artikelSlug);

    setArticleCategories(artikelSlug);
  }
  return (
    <section className="section bg-light">
      <Container>
        <Row>
          <Col md={8} sm={12} xs={12}>
            <Row>
              {DataResponse != null ? (
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

                            <p
                              className="pt-1 pb-4 text-article"
                              dangerouslySetInnerHTML={{
                                __html: `${handleLength(item.content, 120)}`,
                              }}
                            >
                              {/* <div className="text-article" dangerouslySetInnerHTML={{ __html: handleLength(item.content, 120) + '...' }} /> */}
                            </p>

                            <p className="read-more">
                              <Link to={`/article/details/${item.id}`}>Baca Selengkapnya</Link>
                            </p>
                          </div>
                        </div>
                      </Col>
                    </Col>
                  );
                })
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
          <Col md={4} sm={12} xs={12}>
            <div className="sidebar sidebar-right">
              <div className="seacrh-widget">
                <Form className="has-search">
                  <span className="form-control-feedback">
                    <FontAwesomeIcon icon={faSearch} size="1x" />
                  </span>
                  <Form.Control type="text" placeholder="Search Articles" />
                </Form>
              </div>
              <div className="single-sidebar category-widget">
                <div className="title">
                  <h3>Kategori Artikel</h3>
                </div>

                <div id="category" className="category-list">
                  <ListGroup as="ol">
                    {Categories &&
                      Categories.map((value, idx) => {
                        return (
                          <Fragment key={idx}>
                            {/* <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start" key={idx}> */}
                            {ArticleCategories === value.slug ? (
                              <ListGroup.Item as="li" onClick={() => handleArticleChange(value.slug)} className=" d-flex justify-content-between align-items-start kategori-list-article kategori-list-article-active" key={idx}>
                                <div className="me-auto">{value.nama_kategori}</div>
                                <Badge variant="primary" pill>
                                  {value.artikel_count}
                                </Badge>
                              </ListGroup.Item>
                            ) : (
                              <ListGroup.Item as="li" onClick={() => handleArticleChange(value.slug)} className=" d-flex justify-content-between align-items-start kategori-list-article" key={idx}>
                                <div className="me-auto">{value.nama_kategori}</div>
                                <Badge variant="primary" pill>
                                  {value.artikel_count}
                                </Badge>
                              </ListGroup.Item>
                            )}
                            {/* </ListGroup.Item> */}
                          </Fragment>
                        );
                      })}
                  </ListGroup>
                </div>
              </div>
              <div className="recent-post-widget">
                <div className="title-widget">
                  <h3>Populer Artikel</h3>
                </div>
                <div id="popular" className="recent-post-list">
                  <div className="single-recent-post">
                    <ul>
                      {PostPopular &&
                        PostPopular.map((item, index) => {
                          return (
                            <li key={index}>
                              <div className="item-thumbnail">
                                <Link className="img-content" title="" to={`/article/details/${item.id}`}>
                                  <img alt={item.news_category_id} className="circle" src={item.image_file_data} title={item.title} />
                                </Link>
                                <span className="title">
                                  <Link title=" " to={`/article/details/${item.id}`}>
                                    {handleLength(item.title, 80)}
                                  </Link>
                                </span>
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

export default Articles;
