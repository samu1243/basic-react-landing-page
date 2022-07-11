import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Webnav() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
            <div>
          <Navbar.Brand href="#home">Start Bootstrap</Navbar.Brand>
            </div>
            <div>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">About</Nav.Link>
            <Nav.Link href="#pricing">Services</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
            </div>
        </Container>
      </Navbar>
    </>
  );
}

export default Webnav;