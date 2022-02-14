import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
function Navbars() {
  return (
    <Navbar className="navbar-dark bg-custom box-shadow" expand="lg" collapseOnSelect>
      <Container>
        <Navbar.Brand as={Link} to="/"></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="f-size" as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link className="f-size" as={Link} to="/profile">
              Profile
            </Nav.Link>
            <NavDropdown className="f-size" title="Pelayanan" id="basic-nav-dropdown">
              <NavDropdown.Item className="f-size" as={Link} to="/contact">
                Contact
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbars;
