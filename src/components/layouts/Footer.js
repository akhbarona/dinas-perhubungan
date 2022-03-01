import { Row, Col, Container } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="main-footer text-white background-footer">
        <Container>
          <Row>
            <Col md={4} sm={12} xs={12}>
              <div className="title-footer">
                <h3>Tentang Kami</h3>
              </div>
              <p>
                Dinas Perhubungan sebagai pengemban amanat dan tanggung jawab pelayanan di Bidang Perhubungan terus berupaya memperbaiki kualitas pelayanan publiknya. Peningkatan SDM, sarana dan prasarana pelayanan secara bertahap terus
                dilakukan, selain perbaikan sistem secara paralel juga terus disempurnakan.
              </p>
            </Col>
            <Col md={4} sm={12} xs={12}>
              <div className="title-footer">
                <h3>Maps</h3>
              </div>

              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3974.3639219505594!2d105.52247601471117!3d-5.044607796338372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e40910ad7254751%3A0x4f728bd774f521ad!2sDinas%20Perhubungan%20Kab%20Lampung%20Timur!5e0!3m2!1sen!2sid!4v1645085840014!5m2!1sen!2sid"
                width="100%"
                height="250"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </Col>
            <Col md={4} sm={12} xs={12}>
              <div className="title-footer">
                <h3>Buku Tamu</h3>
              </div>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
                a type specimen book.
              </p>
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
