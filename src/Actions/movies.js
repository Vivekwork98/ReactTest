import {
    RETRIEVE_MOVIES,
    RETRIEVE_MOVIE
  } from "./types";

  import MovieDataService from "../Services/movieservice";
  
  export const retrieveMovie  = () => async (dispatch) => {
    try {
      const res = await MovieDataService.getAll();
  
      dispatch({
        type: RETRIEVE_MOVIES,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };

  export const retrieveMovieById  = (id) => async (dispatch) => {
    try {
      const res = await MovieDataService.get(id);
      console.log('res',res);
  
      dispatch({
        type: RETRIEVE_MOVIE,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };