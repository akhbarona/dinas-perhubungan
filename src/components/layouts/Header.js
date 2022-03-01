import { Row, Col, Container } from 'react-bootstrap';
function Header() {
  return (
    <header>
      <div className="header-top">
        <Container>
          <Row>
            <Col className="col top-left">Column</Col>
            <Col className="col top-right">Column</Col>
          </Row>
        </Container>
      </div>
    </header>
  );
}

export default Header;
