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

          <div style={{display: 'flex', 
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignSelf: 'center',
                      alignItems: 'center'}}>
                        
              <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={charactersInfo[0].img} />
              <Card.Body>
              <Card.Title>{charactersInfo[0].name}</Card.Title>
              <Card.Text>
              {charactersInfo[0].status}
              </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
              <ListGroupItem>Cras justo odio</ListGroupItem>
              <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
              <ListGroupItem>Vestibulum at eros</ListGroupItem>
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
