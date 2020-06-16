import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
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
          
      return<> 
            <div className="all-characters-cards-container" >
              <Link to={`character/${actor.char_id}`}> 
                <img src={actor.img} />
                <p className="all-characters-cards-title" >{actor.name}</p>
              </Link>
            </div>
           </>
    }) 
  }

  return(

     <div className="characters-container" >
       {actorsRender}
      </div>  
  );
    
};

export default Characters;

