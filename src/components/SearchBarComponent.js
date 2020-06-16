import React from 'react';
import BBLogo from '../assets/BBLogo.png';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const SearchBarComponent = () => {
  return (
    <Navbar fixed="top"  expand="lg" className="nav-bar-container">
      <Navbar.Brand href="/"><img className="nav-bar-logo" src={BBLogo} alt="Logo"/> </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
      </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
};

export default SearchBarComponent