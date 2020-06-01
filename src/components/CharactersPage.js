import React, {useEffect, useState} from 'react';

const CharacterPage = () => {

  const [charactersInfo, setCharactersInfo] = useState([]);

  useEffect(() => {
    fetch(`https://breakingbadapi.com/api/characters`)
    .then(response => response.json())
    .then(
      data => {
        setCharactersInfo(data);
      }
    )
  }, [])

  return(
    
      <div>
        <p></p>
        <img src={charactersInfo.img} alt={`Character Pic`}/>
      </div>
    
    )
  };
      


    

    export default CharacterPage;
