import { useState, useEffect } from 'react';
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';
import 'moment/locale/id';
function Documents() {
  const [DataDocument, setDataDocument] = useState([]);
  const [Loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(null);
    axios
      .get('http://adminmesuji.embuncode.com/api/dokumen?instansi_id=7')
      .then((response) => {
        setDataDocument(response.data.data.data);
        setLoading(true);
        // console.log(response.data.data.data);
      })
      .catch((error) => {
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

  return (
    <section className="section">
      <Container>
        <Row>
          {Loading != null ? (
            DataDocument &&
            DataDocument.map((item, index) => {
              return item.dokumen_item.map((itm, idx) => {
                return (
                  <Col sm={12} md={6} lg={4} key={idx} className="wrapper-pdf">
                    <Link to={`/pdf/${item.slug}/${itm.dokumen_file_name.replace(/\s/g, '')}`} className="content-pdf">
                      <i className="fa-solid fa-file-pdf"></i>
                      <div className="content-meta-pdf">
                        <div className="item-pdf">
                          <h5>{handleLength(itm.dokumen_file_name, 30)}</h5>
                          <p>{handleLength(itm.description_dokumen, 35)}</p>
                          <div className="item-pdf-info">
                            <span className="info-pdf">{moment(itm.created_at).format('ll')}</span>
                            <span className="info-pdf info-right">{item.created_by}</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </Col>
                );
              });
            })
          ) : (
            <Spinner animation="border" role="status" className="m-auto">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          )}
        </Row>
      </Container>
    </section>
  );
}

export default Documents;
