import { configureStore } from '@reduxjs/toolkit';
import {thunk} from 'redux-thunk';
import moviesReducer from './reducers/moviesReducer';

const store = configureStore({
  reducer: moviesReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
