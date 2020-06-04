import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';


const Characters = (props) => {

  useEffect(() => {
    props.fetchActors()
  }, [])

  return(

     <div>
        <CardColumns>
        {props.characters.map((actor, index) => {
          console.log(actor)
            return <>
              <Link to={`character/${actor.char_id}`} >
                <Card className='cards-pic-wrapper' >
                    <Card.Img variant="top" src={actor.img} className='cards-pics' />
                    <Card.Body>
                    <Card.Title>{actor.name}</Card.Title>
                  </Card.Body>
                </Card>
              </Link>
            </>
          })}
        </CardColumns>
      </div>  
  );
    
};

export default Characters;

