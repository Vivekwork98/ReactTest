import {
  RETRIEVE_MOVIES,
  RETRIEVE_MOVIE
} from "../Actions/types";

const initialState = [];

function movieReducer(movies = initialState, action) {
  const { type, payload } = action;

  switch (type) {

    case RETRIEVE_MOVIES:
      return payload;

    case RETRIEVE_MOVIE:
      return payload;

    default:
      return movies;
  }
};

export default movieReducer;