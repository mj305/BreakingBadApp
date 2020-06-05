import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';
import ErrorPage from './ErrorPage'


const Characters = (props) => {

  useEffect(() => {
    props.fetchActors()
  }, [])
  
  let actorsRender;

  if (props.characters === undefined || props.characters.length === 0) {
    actorsRender=<ErrorPage/>;
  } else {
    actorsRender=props.characters.map((actor, index) => {
          
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
    }) 
  }

  return(

     <div>
        <CardColumns>
          {actorsRender}
         {/* {props.characters.map((actor, index) => {
          
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
          })} */}

        </CardColumns>
      </div>  
  );
    
};

export default Characters;

