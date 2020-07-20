import films from "../mocks/films.js";
import film from "../mocks/film.js";
import ActionType from "./action-types.js";
const ALL_GENRES = `All genres`;
const DISPLAYED_FILMS_COUNT = 8;

const initialState = {
  currentGenre: ALL_GENRES,
  displayedFilmsCount: DISPLAYED_FILMS_COUNT,
  filmsByGenre: films,
  movie: film,
  films
};

const ActionCreator = {
  setFiltredFilmsByGenre: (filmsByGenre) => {

    return {
      type: ActionType.SET_FILTRED_FILMS_BY_GENRE,
      payload: filmsByGenre,
    };
  },

  setCurrentGenre: (currentGenre) => {
    return {
      type: ActionType.SET_CURRENT_GENRE,
      payload: currentGenre,
    };
  },

  increaseDisplayedFilmsCount: () => {
    return {
      type: ActionType.INCREASE_DISPLAYED_FILMS_COUNT,
      payload: DISPLAYED_FILMS_COUNT,
    };
  },
  resetDisplayedFilmsCount: () => {
    return {
      type: ActionType.RESET_DISPLAYED_FILMS_COUNT,
      payload: DISPLAYED_FILMS_COUNT,
    };
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_CURRENT_GENRE:
      return Object.assign({}, state, {
        currentGenre: action.payload,
      });

    case ActionType.SET_FILTRED_FILMS_BY_GENRE:
      return Object.assign({}, state, {
        filmsByGenre: action.payload,
      });

    case ActionType.INCREASE_DISPLAYED_FILMS_COUNT:
      return Object.assign({}, state, {
        displayedFilmsCount: state.displayedFilmsCount + action.payload,
      });
    case ActionType.RESET_DISPLAYED_FILMS_COUNT:
      return Object.assign({}, state, {
        displayedFilmsCount: action.payload,
      });
  }
  return state;
};

export {reducer, ActionCreator, ALL_GENRES};
