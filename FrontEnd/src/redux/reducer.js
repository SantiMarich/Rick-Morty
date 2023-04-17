import {
  ADD_FAVORITE,
  FILTER,
  ORDER,
  RESET,
  REMOVE_CHARACTER,
  ADD_CHARACTERS,
  ADD_LOCATION,
  NEXT_PAGE,
  PREV_PAGE,
  HANDLE_NUMBER,
  SEARCH_CHARACTER,
  REMOVE_FAVORITE,
  GET_CHARACTER_DETAIL,
  GET_FAVORITES,
  CLEAN_DETAIL,
  RESET_CHARACTER,
} from "./actions";

const initialState = {
  myFavorites: [],
  allCharacters: [],
  location: [],
  numPage: 1,
  charactersOrigin: [],
  characters: [],
  data: [],
  myFavoritesOrigin: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_LOCATION:
      return {
        ...state,
        location: [...state.location, action.payload],
      };
    case SEARCH_CHARACTER:
      return {
        ...state,
        characters: [action.payload],
      };
    case HANDLE_NUMBER:
      return {
        ...state,
        numPage: action.payload,
      };
    case NEXT_PAGE:
      return {
        ...state,
        numPage: state.numPage + 1,
      };
    case PREV_PAGE:
      return {
        ...state,
        numPage: state.numPage - 1,
      };
    case ADD_CHARACTERS:
      if (Array.isArray(action.payload)) {
        return {
          ...state,
          charactersOrigin: [...action.payload],
          characters: [...action.payload],
        };
      }
      break;
    case RESET_CHARACTER:
      return {
        ...state,
        characters: [...state.charactersOrigin],
      };
    case REMOVE_CHARACTER:
      const newCharacter = state.myFavoritesOrigin.filter(
        (ch) => ch.id !== action.payload
      );
      return {
        ...state,
        myFavorites: newCharacter,
        myFavoritesOrigin: newCharacter,
      };
    case ADD_FAVORITE:
      const newChar = action.payload;
      const existingChar = state.allCharacters.find(
        (char) => char.id === newChar.id
      );
      if (!existingChar) {
        return {
          ...state,
          allCharacters: [...state.allCharacters, newChar],
          myFavorites: [...state.myFavorites, newChar],
        };
      }
      return state;
    case REMOVE_FAVORITE:
      const updatedAllChars = state.allCharacters.filter(
        (char) => char.id !== action.payload
      );
      const updatedMyFavorites = state.myFavorites.filter(
        (char) => char.id !== action.payload
      );
      return {
        ...state,
        allCharacters: updatedAllChars,
        myFavorites: updatedMyFavorites,
      };
    case FILTER:
      const genderFilter = action.payload;
      const filteredChars = state.allCharacters.filter(
        (char) => char.gender === genderFilter || genderFilter === "All"
      );
      return {
        ...state,
        myFavorites: filteredChars,
      };
    case RESET:
      return {
        ...state,
        myFavorites: [...state.myFavoritesOrigin],
      };
    case ORDER:
      const orderType = action.payload;
      const orderedChars = [...state.myFavorites].sort((a, b) => {
        if (orderType === "A") {
          return a.id - b.id;
        } else {
          return b.id - a.id;
        }
      });
      return {
        ...state,
        myFavorites: orderedChars,
      };
    case GET_CHARACTER_DETAIL:
      return {
        ...state,
        characterDetail: action.payload,
      };
    case CLEAN_DETAIL:
      return {
        ...state,
        characterDetail: {},
      };
    case GET_FAVORITES:
      return {
        ...state,
        myFavorites: action.payload,
      };
    default:
      return { ...state };
  }
};

export default rootReducer;
