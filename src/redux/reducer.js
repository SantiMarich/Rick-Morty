import { ADD_FAVORITE, FILTER, ORDER } from "./actions";
import { REMOVE_FAVORITE } from "./actions";

const initialState = {
  myFavorites: [],
  allCharacters: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORITE:
      return {
        ...state,
        allCharacters: [...state.allCharacters, action.payload],
      };
    case REMOVE_FAVORITE:
      return {
        ...state,
        myFavorites: state.myFavorites.filter(
          (char) => char.id !== action.payload
        ),
      };
    case FILTER:
      const filtroGenero = state.allCharacters.filter(
        (char) => char.gender === action.payload
      );
      return {
        ...state,
        myFavorites: filtroGenero,
      };
    case ORDER:
      const ordenar = [...state.myFavorites];
      if (action.payload === "A") {
        ordenar.sort((a, b) => a.id - b.id);
      } else if (action.payload === "D") {
        ordenar.sort((a, b) => b.id - a.id);
      }
      return {
        ...state,
        myFavorites: ordenar,
      };
    default:
      return { ...state };
  }
};

export default rootReducer;
