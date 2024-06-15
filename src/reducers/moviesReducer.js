import {
    FETCH_MOVIES_REQUEST,
    FETCH_MOVIES_SUCCESS,
    FETCH_MOVIES_FAILURE,
    SELECT_MOVIE,
    CLEAR_SELECTED_MOVIE,
  } from '../actions/actionTypes';

  
  const initialState = {
    searchResults: [],
    loading: false,
    error: null,
    selectedMovie: null,
  };
  
  const moviesReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_MOVIES_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case FETCH_MOVIES_SUCCESS:
        return {
          ...state,
          loading: false,
          searchResults: action.payload,
        };
      case FETCH_MOVIES_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      case SELECT_MOVIE:
        return {
          ...state,
          selectedMovie: action.payload,
        };
      case CLEAR_SELECTED_MOVIE:
        return {
          ...state,
          selectedMovie: null,
        };
      default:
        return state;
    }
  };
  
  export default moviesReducer;
  