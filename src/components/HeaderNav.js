import React, {useState, useEffect} from 'react';
import Characters from './Characters';
import BBLogo from '../assets/BBLogo.png';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import Nav from 'react-bootstrap/Nav';


const HeaderNav = () => {
  
  const [searchInput, setSearchInput] = useState('');
  const [characters, setCharacters] = useState([]);

  const handleChange = (e) => {
    setSearchInput(e.target.value) 
  };
  
  const fetchActors = () => {
    fetch(`https://breakingbadapi.com/api/characters?name=${searchInput}`)
    .then(response => response.json())
    .then(
      data => {
        setCharacters(data);
      }
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    fetchActors();
  };

  return(

       <>
          <Navbar /* bg="light" */ expand="lg" className="nav-bar-container">
            <Navbar.Brand href="/"><img className="nav-bar-logo" src={BBLogo} alt="Logo"/> </Navbar.Brand>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
              </Nav>

              <Form inline onSubmit={handleSubmit} className="form-wrapper">
                <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={handleChange} />
                <Button variant="outline-success">Search</Button>
              </Form>

            </Navbar.Collapse>
          </Navbar>

       <Characters characters={characters} fetchActors={fetchActors} searchInput={searchInput} />
      </>

  );
};

export default HeaderNav;