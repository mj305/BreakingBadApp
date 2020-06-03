import React, {useState} from 'react';
import BBLogo from '../assets/BBLogo.png';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import Nav from 'react-bootstrap/Nav';


const HeaderNav = () => {
  
  const [searchInput, setSearchInput] = useState('');

  const handleChange = (e) => {
    setSearchInput(e.target.value) 
  };
  
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("submit buton is clicked")
  }
  /* HANDLE change is setting state
  apend name in 
  fetch req to url
  name=search imput 
  */

  return(
      
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home"><img className="nav-bar-logo" src={BBLogo} alt="Logo"/> </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
          </Nav>

          <Form inline onSubmit={handleSubmit} >
            <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={handleChange} />
            <Button variant="outline-success">Search</Button>
          </Form>

        </Navbar.Collapse>
      </Navbar>

  );
};

export default HeaderNav;