import React, {useState, useEffect} from 'react';
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
  
 /* Working on preventDefault and SearchForm */
  const handleSubmit = (e) => {
    if (searchInput === '') {
      void 0;
    } else {
      setSearchInput(true);
      e.preventDefault();
      const result = fetch(`https://breakingbadapi.com/api/characters/${searchInput}`)
        .then(response => response.json())
        .then(
          data => {
            setSearchInput(data);
          }
        )
    }
  };

  return(
      
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/"><img className="nav-bar-logo" src={BBLogo} alt="Logo"/> </Navbar.Brand>

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