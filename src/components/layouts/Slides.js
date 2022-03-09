import Carousel from 'react-bootstrap/Carousel';
import axios from 'axios';
import { useEffect, useState } from 'react';

function Slides() {
  const [DataResponse, setDataResponses] = useState(null);

  useEffect(() => {
    axios
      .get('http://adminmesuji.embuncode.com/api/image-gallery?instansi_id=2&per_page=1')
      .then(function (response) {
        setDataResponses(response.data.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <Carousel className="carousel slide carousel-fase">
      {DataResponse &&
        DataResponse.map((item, index) => {
          return item.image_gallery_item.map((itm, idx) => {
            return (
              <Carousel.Item key={idx} interval={3000}>
                <img className="d-block w-100  slider-item" src={itm.image_file_data} alt="First slide" />
              </Carousel.Item>
            );
          });
        })}
    </Carousel>
  );
}

export default Slides;
