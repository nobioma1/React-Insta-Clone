import React from 'react';
import './search.css';

const Search = props => {
  return (
    <div className="search">
      <input
        type="text"
        value={props.searchTerm}
        onChange={props.searchInput}
        placeholder="&#128269;Search"
      />
    </div>
  );
};

export default Search;
