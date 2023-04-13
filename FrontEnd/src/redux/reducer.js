import { ADD_FAVORITE, FILTER, ORDER } from "./actions";
import { REMOVE_FAVORITE } from "./actions";
import { GET_CHARACTER_DETAIL, GET_FAVORITES } from "./actions";
import { CLEAN_DETAIL } from "./actions";

const initialState = {
  myFavorites: [],
  allCharacters: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
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
