import axios from "axios";

export const ADD_FAVORITE = "ADD_FAVORITE";
export const REMOVE_FAVORITE = "REMOVE_FAVORITE";
export const FILTER = "FILTER";
export const ORDER = "ORDER";
export const RESET = "RESET";
export const GET_FAVORITES = "GET_FAVORITES";
export const GET_CHARACTER_DETAIL = "GET_CHARACTER_DETAIL";
export const CLEAN_DETAIL = "CLEAN_DETAIL";
export const RESET_CHARACTER = "RESET_CHARACTER";
export const SEARCH_CHARACTER = "SEARCH_CHARACTER";
export const REMOVE_CHARACTER = "REMOVE_CHARACTER";
export const HANDLE_NUMBER = "HANDLE_NUMBER";
export const PREV_PAGE = "PREV_PAGE";
export const NEXT_PAGE = "NEXT_PAGE";
export const ADD_LOCATION = "ADD_LOCATION";
export const ADD_CHARACTERS = "ADD_CHARACTERS";

export function addLocation(path) {
  return {
    type: ADD_LOCATION,
    payload: path,
  };
}
export function prevPage() {
  return {
    type: PREV_PAGE,
  };
}
export function nextPage() {
  return {
    type: NEXT_PAGE,
  };
}
export function handleNumber(num) {
  return {
    type: HANDLE_NUMBER,
    payload: num,
  };
}
export function searchCharacter(character) {
  return {
    type: SEARCH_CHARACTER,
    payload: character,
  };
}
export function removeCharacter(id) {
  return {
    type: REMOVE_CHARACTER,
    payload: id,
  };
}
export const addFavorite = (character) => {
  return { type: ADD_FAVORITE, payload: character };
};

export const removeFavorite = (id) => {
  return { type: REMOVE_FAVORITE, payload: id };
};

export const filterCards = (gender) => {
  return { type: FILTER, payload: gender };
};

export const orderCards = (order) => {
  return { type: ORDER, payload: order };
};

export const getCharacterDetail = (id) => {
  return async function (dispatch) {
    const URL_BASE = "http://localhost:3001";

    const response = await axios.get(`${URL_BASE}/detail/${id}`);
    dispatch({ type: GET_CHARACTER_DETAIL, payload: response.data });
  };
};

export const cleanDetail = () => {
  return { type: CLEAN_DETAIL };
};

export const getFavorites = () => {
  return async function (dispatch) {
    const URL_BASE = "http://localhost:3001";
    const response = await axios.get(`${URL_BASE}/rickandmort/fav`);
    dispatch({ type: GET_FAVORITES, payload: response.data });
  };
};

export function reset() {
  return {
    type: RESET,
  };
}
export function resetCharacters() {
  return {
    type: RESET_CHARACTER,
  };
}

export function addCharacters(characters) {
  return {
    type: ADD_CHARACTERS,
    payload: characters,
  };
}
