import { Container, Row, Col, Spinner } from 'react-bootstrap';
import { useState, useEffect, useLayoutEffect } from 'react';
import axios from 'axios';

function PhotoGalleries() {
  const [images, setImages] = useState(null);
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  useEffect(() => {
    axios
      .get('http://adminmesuji.embuncode.com/api/image-gallery?instansi_id=2')
      .then(function (response) {
        setImages(response.data.data.data);
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

  var i = 1;
  return (
    <section>
      <Container className="sec-pad">
        <div className="gallery-filter">
          <ul></ul>
        </div>

        <Row xs={1} md={3} className="g-4">
          {/* {console.log(images)} */}
          {images != null ? (
            <>
              {images &&
                images.map((item, index) => {
                  return item.image_gallery_item.map((itm, idx) => {
                    return (
                      <Col md={6} sm={12} xs={12} lg={4} key={idx}>
                        <a href={`#lightbox-` + i}>
                          <div className="tile">
                            <img src={itm.image_file_data} />
                            <div className="text">
                              <h1>{handleLength(itm.description, 20)}</h1>
                              {/* <h2 className="animate-text">More lorem ipsum bacon ipsum.</h2> */}
                              <p className="animate-text">{itm.description} </p>
                              <div className="dots">
                                <span></span>
                                <span></span>
                                <span></span>
                              </div>
                            </div>
                          </div>
                        </a>
                        <div className="lightbox" id={`lightbox-` + i} key={++i}>
                          <div className="content">
                            <img src={itm.image_file_data} />
                            <div className="title">{itm.image_file_name}</div>
                            <a className="close" href="#image"></a>
                          </div>
                        </div>
                      </Col>
                    );
                  });
                })}
            </>
          ) : (
            <Spinner animation="border" role="status" className="m-auto">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          )}
        </Row>
        <div className="gallery-filter">
          <ul></ul>
        </div>
      </Container>
    </section>
  );
}
export default PhotoGalleries;
