import React from 'react';
import { Movie } from './Movie';

function Movies(props) {
  const { movies } = props;

  // Check if movies array is defined and not empty
  // if (!movies || movies.length === 0) {
  //   return <h5>No movies found.</h5>;
  // }

  return (
    <div className='movies'>
      {movies.length ? (
        movies.map((movie) => <Movie key={movie.imdbID} {...movie} />)
      ) : (
        <h3>Nothing to found</h3>
      )}
    </div>
  );
}

export default Movies;
