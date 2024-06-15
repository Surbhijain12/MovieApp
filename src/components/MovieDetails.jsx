import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {  useDispatch } from 'react-redux';
import { clearSelectedMovie } from '../actions/movieActions';


const MovieDetails = ({selectedMovie}) => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const movie = location?.state?.movie || {};
// const movie = {name: 'Surbhi',
//     image: {
//         medium : 12
//     },
//     summary :"abc"
// }
  
  if (!movie) {
    return <div>No movie selected.</div>;
  }

  const handleDelete = () => {
    dispatch(clearSelectedMovie());
    navigate('/');
  };

  return (
    <div className="movie-details">
      <h2>{movie?.name}</h2>
      <img src={movie?.image?.medium} alt="Movie poster" />
      <p>{movie?.summary}</p>
      <button onClick={handleDelete}>Delete Movie</button>
    </div>
  );
};

export default MovieDetails;
