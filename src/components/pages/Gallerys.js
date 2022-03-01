import { Container, Modal, Row, Col, Breadcrumb } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import axios from 'axios';
// import ReactPlayer from 'react-player/youtube';

function Gallerys() {
  const [show, setShow] = useState(false);
  const [detailImage, setDetailImage] = useState('');
  const handleClose = () => setShow(false);
  const handleShow = (item) => {
    setDetailImage(item);
    return setShow(true);
  };

  const [images, setImages] = useState(null);
  const [videos, setVideos] = useState(null);
  useEffect(() => {
    // axios
    //   .get('http://adminmesuji.embuncode.com/api/image-gallery?instansi_id=2')
    //   .then(function (response) {
    //     setImages(response.data.data.data);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
    axios.all([axios.get('http://adminmesuji.embuncode.com/api/image-gallery?instansi_id=2'), axios.get('http://adminmesuji.embuncode.com/api/video-gallery?instansi_id=2')]).then(
      axios.spread((obj1, obj2) => {
        // Both requests are now complete
        setImages(obj1.data.data.data);
        setVideos(obj2.data.data.data);
      })
    );
  }, []);
  function handleLength(value, lengths) {
    if (value.length < lengths) {
      return value;
    } else {
      return value.substring(0, lengths).substring(0, value.substring(0, lengths).lastIndexOf(' ')) + '...';
    }
  }

  return (
    <section>
      <div className="inner-banner">
        <Container>
          <h3>Gallery SKPD</h3>
          <Breadcrumb className="justify-content-center">
            <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
            <Breadcrumb.Item href="#" active>
              Gallery
            </Breadcrumb.Item>
          </Breadcrumb>
        </Container>
      </div>
      <Container className="sec-pad">
        <div className="gallery-filter">
          <ul>
            <h2 className="heading">Take a look at some of our Aktivities and Memories</h2>
            <h3 className="heading">Gallery Foto</h3>
          </ul>
        </div>

        <Row xs={1} md={3} className="g-4">
          {images &&
            images.map((item, index) => {
              return item.image_gallery_item.map((itm, idx) => {
                return (
                  <Col md={6} sm={12} xs={12} lg={4} key={idx}>
                    <div className="tile" onClick={() => handleShow(itm)}>
                      <img src={itm.image_file_data} />
                      <div className="text">
                        <h1>{handleLength(itm.description, 20)}</h1>
                        {/* <h2 className="animate-text">More lorem ipsum bacon ipsum.</h2> */}
                        <p className="animate-text">{itm.image_file_name} </p>
                        <div className="dots">
                          <span></span>
                          <span></span>
                          <span></span>
                        </div>
                      </div>
                    </div>
                  </Col>
                );
              });
            })}

          <Modal size="xl" show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
              <Modal.Title>{detailImage.image_file_name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <img className="img-display w-100" src={detailImage.image_file_data} height={600} />
            </Modal.Body>
            <Modal.Footer>
              <p>{detailImage.description}</p>
            </Modal.Footer>
          </Modal>
        </Row>
        <div className="gallery-filter">
          <ul>
            <h3 className="heading">Gallery Videos</h3>
          </ul>
        </div>
        <Row xs={1} md={3} className="g-4">
          {videos &&
            videos.map((item, index) => {
              return item.image_gallery_item.map((itm, idx) => {
                return (
                  <Col md={6} sm={12} xs={12} lg={4} key={idx}>
                    <div className="tile-videos">
                      <iframe id="player" type="text/html" src={`https://www.youtube.com/embed/${itm.video_url}?`} className="player-wrapper" style={{ width: '100%', height: '100%' }} frameBorder="0"></iframe>
                      {/* <ReactPlayer url="https://www.youtube.com/watch?v=ZuxG5HjqyNg" className="player-wrapper" width="100%" height="100%" controls={true} /> */}
                      <div className="text-videos">
                        <h5 style={{ marginTop: '4rem', marginBottom: '0rem', fontSize: '20px' }}>{item.description}</h5>
                        {/* <h2 className="animate-text-videos">More lorem ipsum bacon ipsum.</h2> */}
                        <p className="animate-text-videos">{itm.description}</p>
                      </div>
                    </div>
                  </Col>
                );
              });
            })}
        </Row>
      </Container>
    </section>
  );
}
export default Gallerys;
