import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import Card from 'react-bootstrap/Card';


const Characters = () => {
  function handleClick(e) {
    e.preventDefault();
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
       {characters.map((actor, index) => {

      return <>

          <Card key={index} 
                  style={{ width: '18rem', 
                           marginTop:"2rem", 
                           display: "inline-flex",
                          }}>

              <Card.Img variant="top" src={actor.img} />
              <Card.Body>
                <Card.Title> {actor.name} </Card.Title>
                <Card.Text>
                  {actor.status}
                </Card.Text>
                <Link to={`character/${actor.char_id}`}>View Details</Link>
              </Card.Body>
            </Card>

         </>

       })}
     </div>
    )
};

export default Characters;

