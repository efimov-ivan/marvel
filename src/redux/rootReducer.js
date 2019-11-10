const initialState = {
  loading: true,
  characters: [],
  hero: []
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "FETCH_CHARACTERS_START":
      return {
        ...state,
        loading: true
      };
    case "FETCH_CHARACTERS_SUCCESS":
      return {
        ...state,
        loading: false,
        characters: action.characters
      };
    case "FETCH_HERO_SUCCESS":
      return {
        ...state,
        loading: false,
        hero: action.hero
      };
    default:
      return state;
  }
}
