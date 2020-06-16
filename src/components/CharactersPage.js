import React, {useEffect, useState} from 'react';
import { withRouter, useParams } from "react-router-dom";
import SearchBarComponent from './SearchBarComponent';

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
    <div className="characters-page-container">

       <SearchBarComponent />

        <div className="characters-page-cards-container" />

            <div className="characters-page-cards-title-name" >
              <h1>{charactersInfo[0].name}</h1>
              <img src={charactersInfo[0].img} />
            </div>

            <div className="characters-page-cards-descriptions" >
              <p>Alias: {charactersInfo[0].nickname}</p>
              <p>Occupation: {charactersInfo[0].occupation}</p>
              <p>Status: {charactersInfo[0].status}</p>
              <p>Actor Name: {charactersInfo[0].portrayed}</p>
            </div>

        </div>
    </>

    )
  };
      
export default withRouter(CharacterPage);
