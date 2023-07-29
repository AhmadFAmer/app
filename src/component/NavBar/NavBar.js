import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Container,NavDropdown,Nav,Navbar } from "react-bootstrap";
import logo from '../../img/logo.png';
// import { NavLink } from 'react-router-dom';
// import a from "../About/About";
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './NavBar.css';
function NavBar() {       
    return(
      // <Router>
    <Navbar expand="lg" className="bg-body-tertiary sticky-top">
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} className="logo img-fluid" alt="logo"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto my-1 navbar">
            <Nav.Link className="mx-2" to="/">HOME</Nav.Link>
            <Nav.Link className="mx-2" to="" >ABOUTS</Nav.Link>
            <Nav.Link className="mx-2" href="#products">PRODUCTS</Nav.Link>
            <Nav.Link className="mx-2" href="#store">STORE</Nav.Link>
            <NavDropdown className="mx-2" title="PAGES" id="basic-nav-dropdown">
              <NavDropdown.Item href="#page/5.1">Features</NavDropdown.Item>
              <NavDropdown.Item href="#page/5.2">Blog Article</NavDropdown.Item>
              <NavDropdown.Item href="#page/5.3">Testimonial</NavDropdown.Item>
              <NavDropdown.Item href="#page/5.4">404 Page</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className="mx-2" href="contact">CONTACT</Nav.Link>
            <Nav.Link className="mx-2 search ps-4" href="#search"><FontAwesomeIcon icon={faMagnifyingGlass} /></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    // </Router>
  );
}
export default NavBar;