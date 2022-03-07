import React from 'react';

import './Slide.css';
class Home extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 pb-5">
            <section className="row">
              <div className="col-12 col-md-6 pb-0 pb-md-3 pt-2 pr-md-1">
                <div id="featured" className="carousel slide carousel" data-ride="carousel">
                  <ol className="carousel-indicators top-indicator">
                    <li data-target="#featured" data-slide-to="0" className="active"></li>
                    <li data-target="#featured" data-slide-to="1"></li>
                    <li data-target="#featured" data-slide-to="2"></li>
                    <li data-target="#featured" data-slide-to="3"></li>
                  </ol>

                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <div className="card border-0 rounded-0 text-light overflow zoom">
                        <div className="position-relative">
                          <div className="ratio_left-cover-1 image-wrapper">
                            <a href="#">
                              <img className="img-fluid w-100" src="https://therichpost.com/wp-content/uploads/2021/03/Reactjs-Bootstrap-4-News-Magazine-Carousel.png" alt="Bootstrap news template" />
                            </a>
                          </div>
                          <div className="position-absolute p-2 p-lg-3 b-0 w-100 bg-shadow">
                            <a href="#">
                              <h2 className="h3 post-title text-white my-1">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h2>
                            </a>

                            <div className="news-meta">
                              <span className="news-author">
                                by{' '}
                                <a className="text-white font-weight-bold" href="#">
                                  Jennifer
                                </a>
                              </span>
                              <span className="news-date">Oct 22, 2019</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="carousel-item">
                      <div className="card border-0 rounded-0 text-light overflow zoom">
                        <div className="position-relative">
                          <div className="ratio_left-cover-1 image-wrapper">
                            <a href="#">
                              <img className="img-fluid w-100" src="https://therichpost.com/wp-content/uploads/2021/03/Reactjs-Bootstrap-4-News-Magazine-Carousel.png" alt="Bootstrap news theme" />
                            </a>
                          </div>
                          <div className="position-absolute p-2 p-lg-3 b-0 w-100 bg-shadow">
                            <a href="#">
                              <h2 className="h3 post-title text-white my-1">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h2>
                            </a>

                            <div className="news-meta">
                              <span className="news-author">
                                by{' '}
                                <a className="text-white font-weight-bold" href="#">
                                  Jassa
                                </a>
                              </span>
                              <span className="news-date">Oct 22, 2019</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="carousel-item">
                      <div className="card border-0 rounded-0 text-light overflow zoom">
                        <div className="position-relative">
                          <div className="ratio_left-cover-1 image-wrapper">
                            <a href="#">
                              <img className="img-fluid w-100" src="https://therichpost.com/wp-content/uploads/2021/03/Reactjs-Bootstrap-4-News-Magazine-Carousel.png" alt="Bootstrap blog template" />
                            </a>
                          </div>
                          <div className="position-absolute p-2 p-lg-3 b-0 w-100 bg-shadow">
                            <a href="#">
                              <h2 className="h3 post-title text-white my-1">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h2>
                            </a>

                            <div className="news-meta">
                              <span className="news-author">
                                by{' '}
                                <a className="text-white font-weight-bold" href="#">
                                  Jassa
                                </a>
                              </span>
                              <span className="news-date">Oct 22, 2019</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="carousel-item">
                      <div className="card border-0 rounded-0 text-light overflow zoom">
                        <div className="position-relative">
                          <div className="ratio_left-cover-1 image-wrapper">
                            <a href="#">
                              <img className="img-fluid w-100" src="https://therichpost.com/wp-content/uploads/2021/03/Reactjs-Bootstrap-4-News-Magazine-Carousel.png" alt="Bootstrap portal template" />
                            </a>
                          </div>
                          <div className="position-absolute p-2 p-lg-3 b-0 w-100 bg-shadow">
                            <a href="#">
                              <h2 className="h3 post-title text-white my-1">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h2>
                            </a>

                            <div className="news-meta">
                              <span className="news-author">
                                by{' '}
                                <a className="text-white font-weight-bold" href="#">
                                  Jassa
                                </a>
                              </span>
                              <span className="news-date">Oct 22, 2019</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <a className="carousel-control-prev" href="#featured" role="button" data-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#featured" role="button" data-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="sr-only">Next</span>
                </a>
              </div>

              <div className="col-12 col-md-6 pt-2 pl-md-1 mb-3 mb-lg-4">
                <div className="row">
                  <div className="col-6 pb-1 pt-0 pr-1">
                    <div className="card border-0 rounded-0 text-white overflow zoom">
                      <div className="position-relative">
                        <div className="ratio_right-cover-2 image-wrapper">
                          <a href="#">
                            <img className="img-fluid" src="https://therichpost.com/wp-content/uploads/2021/03/Reactjs-Bootstrap-4-News-Magazine-Carousel.png" alt="simple blog template bootstrap" />
                          </a>
                        </div>
                        <div className="position-absolute p-2 p-lg-3 b-0 w-100 bg-shadow">
                          <a className="p-1 badge badge-primary rounded-0" href="#">
                            Lifestyle
                          </a>

                          <a href="#">
                            <h2 className="h5 text-white my-1">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h2>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-6 pb-1 pl-1 pt-0">
                    <div className="card border-0 rounded-0 text-white overflow zoom">
                      <div className="position-relative">
                        <div className="ratio_right-cover-2 image-wrapper">
                          <a href="#">
                            <img className="img-fluid" src="https://therichpost.com/wp-content/uploads/2021/03/Reactjs-Bootstrap-4-News-Magazine-Carousel.png" alt="bootstrap templates for blog" />
                          </a>
                        </div>
                        <div className="position-absolute p-2 p-lg-3 b-0 w-100 bg-shadow">
                          <a className="p-1 badge badge-primary rounded-0" href="#">
                            Motocross
                          </a>

                          <a href="#">
                            <h2 className="h5 text-white my-1">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h2>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-6 pb-1 pr-1 pt-1">
                    <div className="card border-0 rounded-0 text-white overflow zoom">
                      <div className="position-relative">
                        <div className="ratio_right-cover-2 image-wrapper">
                          <a href="#">
                            <img className="img-fluid" src="https://therichpost.com/wp-content/uploads/2021/03/Reactjs-Bootstrap-4-News-Magazine-Carousel.png" alt="bootstrap blog wordpress theme" />
                          </a>
                        </div>
                        <div className="position-absolute p-2 p-lg-3 b-0 w-100 bg-shadow">
                          <a className="p-1 badge badge-primary rounded-0" href="#">
                            Fitness
                          </a>

                          <a href="#">
                            <h2 className="h5 text-white my-1">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h2>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-6 pb-1 pl-1 pt-1">
                    <div className="card border-0 rounded-0 text-white overflow zoom">
                      <div className="position-relative">
                        <div className="ratio_right-cover-2 image-wrapper">
                          <a href="#">
                            <img className="img-fluid" src="https://therichpost.com/wp-content/uploads/2021/03/Reactjs-Bootstrap-4-News-Magazine-Carousel.png" alt="blog website templates bootstrap" />
                          </a>
                        </div>
                        <div className="position-absolute p-2 p-lg-3 b-0 w-100 bg-shadow">
                          <a className="p-1 badge badge-primary rounded-0" href="#">
                            Adventure
                          </a>

                          <a href="#">
                            <h2 className="h5 text-white my-1">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h2>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
