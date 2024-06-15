import React from 'react';
import { Link } from 'react-router-dom';


const MovieTable = ({movie}) => {
  return (
    <div className="movie-details">
      <h2>Movie Details</h2>
      <table>
        <tbody>
          <tr><td>Title:</td>
            <td><Link to='/details'
                  state= {{ movie} } 
              // Pass the movie object in the state
                  rel="noopener noreferrer">{movie.name}</Link>
          </td> 
          </tr>
          <tr>
            <td>Image:</td>
            <td><img src={movie.image.medium} alt="Movie poster" /></td> 
          </tr>
          <tr>
            <td>Rating:</td>
            <td>{movie.rating.average}</td> 
          </tr>
          <tr>
            <td>Description:</td>
            <td>{movie.summary}</td> 
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default MovieTable;
