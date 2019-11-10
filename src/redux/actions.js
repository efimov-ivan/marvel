import axios from "axios";
const PUBLIC_KEY = process.env.REACT_APP_PUBLIC;

export function fetchCharacters(loadedCharacters = []) {
  return async dispatch => {
    dispatch(fetchCharactersStart());
    await axios
      .get("http://gateway.marvel.com/v1/public/characters", {
        params: {
          apikey: PUBLIC_KEY,
          limit: 15,
          offset: loadedCharacters.length
        }
      })
      .then(function(response) {
        const characters = [];
        response.data.data.results.forEach(item => {
          characters.push(item);
        });
        loadedCharacters = loadedCharacters.concat(characters);
        dispatch(fetchCharactersSuccess(loadedCharacters));
      })
      .catch(function(e) {
        console.log(e);
      });
  };
}

export function fetchCharacterById(id) {
  return async dispatch => {
    dispatch(fetchCharactersStart());
    await axios
      .get(`http://gateway.marvel.com/v1/public/characters/${id}`, {
        params: {
          apikey: PUBLIC_KEY
        }
      })
      .then(function(response) {
        dispatch(fetchHeroSuccess(response.data.data.results));
      });
  };
}

export function fetchCharactersStart() {
  return {
    type: "FETCH_CHARACTERS_START"
  };
}
export function fetchCharactersSuccess(characters) {
  return {
    type: "FETCH_CHARACTERS_SUCCESS",
    characters
  };
}
export function fetchHeroSuccess(hero) {
  return {
    type: "FETCH_HERO_SUCCESS",
    hero
  };
}
