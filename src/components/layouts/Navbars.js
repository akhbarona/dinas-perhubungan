import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect, Fragment } from 'react';
function Navbars() {
  const [DataResponse, setDataResponses] = useState(0);

  useEffect(() => {
    axios
      .get('http://adminmesuji.embuncode.com/api/menus?instansi_id=4')
      .then(function (response) {
        setDataResponses(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  return (
    <Navbar className="navbar-dark bg-custom box-shadow" expand="lg" sticky="top" collapseOnSelect>
      <Container>
        <Navbar.Brand as={Link} to="/"></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {DataResponse &&
              DataResponse.map((m, i) => {
                return (
                  <Fragment key={m.id}>
                    {m.children.length > 0 ? (
                      <NavDropdown className="f-size" title={m.name} key={i} id="basic-nav-dropdown">
                        {m.children &&
                          m.children.map((h, k) => {
                            return (
                              <NavDropdown.Item className="f-size" key={h.id} as={Link} to={h.url}>
                                {h.name}
                              </NavDropdown.Item>
                            );
                          })}
                      </NavDropdown>
                    ) : (
                      <Nav.Link className="f-size" as={Link} key={m.id} to={m.url}>
                        {m.name}
                      </Nav.Link>
                    )}
                  </Fragment>
                );
              })}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbars;
