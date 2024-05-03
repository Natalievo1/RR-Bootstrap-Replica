import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';


const NavbarComponent = () => {
  return (
    <Navbar bg="light" expand="sm">
      <Navbar.Brand href="#home">Instacart Clone</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="custom-toggler" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#Login">LogIn</Nav.Link>
          <Nav.Link href="#SignUp">SignUp</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComponent;
