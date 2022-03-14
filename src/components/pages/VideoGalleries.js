import { Container, Row, Col, Spinner } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import axios from 'axios';

function VideoGalleries() {
  const [videos, setVideos] = useState(null);

  useEffect(() => {
    axios
      .get('http://adminmesuji.embuncode.com/api/video-gallery?instansi_id=4')
      .then(function (response) {
        setVideos(response.data.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
    // axios.all([axios.get('http://adminmesuji.embuncode.com/api/image-gallery?instansi_id=2'), axios.get('http://adminmesuji.embuncode.com/api/video-gallery?instansi_id=2')]).then(
    //   axios.spread((obj1, obj2) => {
    //     // Both requests are now complete
    //     setImages(obj1.data.data.data);
    //     setVideos(obj2.data.data.data);
    //   })
    // );
  }, []);

  return (
    <section>
      <Container className="sec-pad">
        <div className="gallery-filter">
          <ul></ul>
        </div>
        <Row xs={1} md={3} className="g-4">
          {videos != null ? (
            <>
              {videos &&
                videos.map((item, index) => {
                  return item.image_gallery_item.map((itm, idx) => {
                    return (
                      <Col md={6} sm={12} xs={12} lg={4} key={idx}>
                        <div className="tile-videos">
                          <iframe title={itm.description} id="player" type="text/html" src={`https://www.youtube.com/embed/${itm.video_url}?`} className="player-wrapper" style={{ width: '100%', height: '100%' }} frameBorder="0"></iframe>
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
export default VideoGalleries;
