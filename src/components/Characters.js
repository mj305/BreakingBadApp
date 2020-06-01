import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import PaginationComponent from './Pagination';


const Characters = () => {
  function handleClick(e) {
    e.preventDefault();
    console.log('The link was clicked.');
  }

  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch(`https://breakingbadapi.com/api/characters`)
    .then(response => response.json())
    .then(
      data => {
        setCharacters(data);
      }
    )
  }, [])

  return(
     <div>
       {characters.map(actor => {

         return <>
           <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={actor.img} />
            <Card.Body>
              <Card.Title> {actor.name} </Card.Title>
              <Card.Text>
                {actor.status}
              </Card.Text>
              <Link to="/charactersPage" onClick={handleClick}>View Details</Link>
            </Card.Body>
          </Card>
         </>
       })}
       <PaginationComponent />
     </div>
    )
};

export default Characters;

