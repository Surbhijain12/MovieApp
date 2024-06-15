import axios from 'axios';
import {
  FETCH_MOVIES_REQUEST,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_FAILURE,
  SELECT_MOVIE,
  SEARCH_RESULTS,
  CLEAR_SELECTED_MOVIE,
} from './actionTypes';

export const fetchMoviesRequest = () => ({
  type: FETCH_MOVIES_REQUEST,
});

export const fetchMoviesSuccess = (movies) => ({
  type: FETCH_MOVIES_SUCCESS,
  payload: movies,
});

export const fetchMoviesFailure = (error) => ({
  type: FETCH_MOVIES_FAILURE,
  payload: error,
});

export const selectMovie = (movie) => ({
  type: SELECT_MOVIE,
  payload: movie,
});

export const clearSelectedMovie = () => ({
  type: CLEAR_SELECTED_MOVIE,
});

// Thunk action creator for fetching movies
export const fetchMovies = (query) => {
  return (dispatch) => {
    dispatch(fetchMoviesRequest());
    axios.get(`https://api.tvmaze.com/search/shows?q=${query}`)
      .then(response => {
        dispatch(fetchMoviesSuccess(response.data));
      })
      .catch(error => {
        dispatch(fetchMoviesFailure(error.message));
      });
  };
};
