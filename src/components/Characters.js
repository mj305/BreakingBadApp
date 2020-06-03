import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import Card from 'react-bootstrap/Card';


const Characters = () => {


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
       {characters.map((actor, index) => {

      return <>

          <div className="characters-cards-container">
          <Card className="characters-cards-wrapper" key={index}>
              <Link to={`character/${actor.char_id}`}>             
                <Card.Img variant="top" src={actor.img} />
                  <Card.Body>
                    <Card.Title> {actor.name} </Card.Title>
                  </Card.Body>
              </Link> 
            </Card>
          </div>
            
         </>

       })}
     </div>
    )
};

export default Characters;

