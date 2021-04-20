import React from 'react';
import { Navbar,Nav} from 'react-bootstrap'
const Navbar1 = () => {
    return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
        <Navbar.Brand href="#home"><span>Lucky</span>Shukla</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/about-us">Aboout</Nav.Link>
          <Nav.Link href="/Skills">Resume</Nav.Link>
          <Nav.Link href="/Projects">Projects</Nav.Link>
          <Nav.Link href="/contact-us">Contect</Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
    )
}

export default Navbar1;