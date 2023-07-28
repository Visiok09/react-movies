import React, { useState } from 'react';

const Search = (props) => {
  const [search, setSearch] = useState('');
  const [type, setType] = useState('all');
  const { searchMovies } = props;

  const handleKey = (event) => {
    if (event.key === 'Enter') {
      searchMovies(search);
    }
  };
  const handleFilter = (event) => {
    setType(
      () => event.target.dataset.type,
      () => {
        searchMovies(search, type);
      }
    );
  };

  return (
    <div className='row'>
      <div className='input-field col s11'>
        <input
          placeholder='search'
          type='search'
          className='validate'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={handleKey}
        />
        <button
          className='btn search-btn'
          onClick={() => searchMovies(search, type)}
        >
          Send
        </button>
      </div>
      <div>
        <label>
          <input
            className='with-gap'
            name='type'
            type='radio'
            data-type='all'
            onChange={handleFilter}
            checked={type === 'all'}
          />
          <span>All</span>
        </label>
        <label>
          <input
            className='with-gap'
            name='type'
            type='radio'
            data-type='movie'
            onChange={handleFilter}
            checked={type === 'movie'}
          />
          <span>Movies</span>
        </label>
        <label>
          <input
            className='with-gap'
            name='type'
            type='radio'
            data-type='series'
            onChange={handleFilter}
            checked={type === 'series'}
          />
          <span>Series</span>
        </label>
      </div>
    </div>
  );
};

export default Search;
