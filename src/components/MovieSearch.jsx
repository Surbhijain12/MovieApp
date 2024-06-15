import React, { useState , useEffect} from 'react';
import MovieTable from './MovieTable';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies, selectMovie } from '../actions/movieActions';


const MovieSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [dropdownVisibility, setDropdownVisibility] = useState(true);
  const dispatch = useDispatch();
  const { searchResults, loading, error, selectedMovie } = useSelector(state => state);

  useEffect(() => {
   
    if (searchQuery) {
      dispatch(fetchMovies(searchQuery));
    } 
  }, [searchQuery, dispatch]);

  
  const handleInputChange = (event) => {
    setDropdownVisibility(true);
    const query = event.target.value;
    setSearchQuery(query);
  };

  const handleMovieClick = (movie) => {
    setDropdownVisibility(false);
    dispatch(selectMovie(movie.show)); // Set selected movie
  };

  return (
    <div className="movie-search">
      <h1>Movie Search</h1>
      <input
        type="text"
        value={searchQuery}
        onChange={handleInputChange}
        placeholder="Enter movie title..."
      />
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}
      {searchQuery   && searchResults.length > 0 && dropdownVisibility &&(
        <div className="dropdown-content">
          {searchResults.map((movie, index) => (
            <a
              key={index}
              href="#"
              onClick={() => handleMovieClick(movie)}
            >
              {movie.show.name}
            </a>
          ))}
        </div>
      )}
      {selectedMovie && <MovieTable movie={selectedMovie} />} {/* Render MovieTable if a movie is selected */}
    </div>
  );
};

export default MovieSearch;
