import React, {useEffect, useState} from 'react';
import { withRouter, useParams } from "react-router-dom";
import SearchBarComponent from './SearchBarComponent';
import Footer from '../components/FooterComponent';

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
     <SearchBarComponent />
      <div className="character-page-container" >
          <div className="character-page-title-name" >
            <h1 className="character-page-title" >{charactersInfo[0].name}</h1>
            <img className="character-page-picture" src={charactersInfo[0].img} />
          </div>

          <div className="character-page-cards-descriptions" >
            <p>Alias: {charactersInfo[0].nickname}</p>
            <p>Occupation: {charactersInfo[0].occupation}</p>
            <p>Status: {charactersInfo[0].status}</p>
            <p>Actor Name: {charactersInfo[0].portrayed}</p>
          </div>
      </div> 
      <div  className="footer-container"  >
       <Footer />
      </div>       
    </>

    )
  };
      
export default withRouter(CharacterPage);
