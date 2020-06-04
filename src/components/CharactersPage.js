import React, {useEffect, useState} from 'react';
import BBLogo from '../assets/BBLogo.png';

import { withRouter, useParams } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import ListGroup from 'react-bootstrap/ListGroup';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';

const CharacterPage = () => {

  const [charactersInfo, setCharactersInfo] = useState([{}]);
  const {id} = useParams();

  useEffect(() => {
    fetch(`https://breakingbadapi.com/api/characters/${id}`)
    .then(response => response.json())
    .then(
      data => {
        setCharactersInfo(data);
      }
    )
  }, [])
 
  return( 

      <>
        <Navbar /* bg="light" */ expand="lg" className="nav-bar-container">
            <Navbar.Brand href="/"><img className="nav-bar-logo" src={BBLogo} alt="Logo"/> </Navbar.Brand>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
              </Nav>

              <Form inline  className="form-wrapper">
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-success">Search</Button>
              </Form>

            </Navbar.Collapse>
          </Navbar>

          <div className="characters-page-container">

              <Card style={{ width: '30rem' }}>
              <Card.Title style={{textAlign: 'center', padding: '.5rem', margin: '.5rem'}}>{charactersInfo[0].name}</Card.Title>
              <Card.Img variant="top" src={charactersInfo[0].img} />
              <Card.Body>
              
              <Card.Text>Alias: {charactersInfo[0].nickname}</Card.Text>

              </Card.Body>
              <ListGroup className="list-group-flush">
              <ListGroupItem>Occupation: {charactersInfo[0].occupation}</ListGroupItem>
              <ListGroupItem>Status: {charactersInfo[0].status}</ListGroupItem>
              <ListGroupItem>Actor Name: {charactersInfo[0].portrayed}</ListGroupItem>
              </ListGroup>
              </Card>
          </div>
      </>

    )
  };
      
export default withRouter(CharacterPage);
