import React, {useEffect, useState} from 'react';
import { withRouter, useParams } from "react-router-dom";
import HeaderNav from './HeaderNav';
import Card from 'react-bootstrap/Card';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import ListGroup from 'react-bootstrap/ListGroup';

const CharacterPage = () => {

  const [charactersInfo, setCharactersInfo] = useState([{img:""}]);
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
  console.log(charactersInfo[0])
  return( 

      <>
        <HeaderNav />

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
              {/*     <Card.Body>
              <Card.Link href="/">Home</Card.Link>
              </Card.Body> */}
              </Card>
          </div>
      </>

    )
  };
      
export default withRouter(CharacterPage);
