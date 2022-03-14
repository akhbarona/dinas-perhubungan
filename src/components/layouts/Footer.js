import { Row, Col, Container } from 'react-bootstrap';

function Footer(props) {
  return (
    <footer className="site-footer">
      <div className="main-footer text-white background-footer">
        <Container>
          <Row>
            <Col md={4} sm={12} xs={12}>
              <div className="title-footer">
                <h3>Tentang Kami</h3>
              </div>
              <p className="text-footer">{props.data.tentang}</p>
            </Col>
            <Col md={4} sm={12} xs={12}>
              <div className="title-footer">
                <h3>Maps</h3>
              </div>

              <iframe title={props.data.nama_instansi} src={props.data.google_map} width="100%" height="250" allowFullScreen="" loading="lazy"></iframe>
            </Col>
            <Col md={4} sm={12} xs={12}>
              <div className="title-footer">
                <h3 className="title-logo-lamtim">Kabupaten Lampung Timur</h3>
              </div>
              <div className="logo-size">
                <img className="logo-footer" src={`${props.data.logo_instansi}`} alt="logo" key="1" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="bottom-footer">
        <Container>
          <p>&copy; Copyright 2022. Website Resmi Dinas Perhubungan Kabupaten Lampung Timur | All rights reserved</p>
        </Container>
      </div>
    </footer>
  );
}

export default Footer;
