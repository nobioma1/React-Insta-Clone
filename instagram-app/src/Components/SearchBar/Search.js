import React from 'react';
import styled from 'styled-components';

const SearchInput = styled.input`
  width: 215px;
  height: 28px;
  font-size: 14px;
  text-align: center;
  border-radius: 5px;
  border: 1px solid #999;
  background-color: #f0f0ef;
  opacity: 0.5;
  @media (max-width: 500px) {
    display: none;
  }

  &:focus {
    outline: none;
  }
`;

const Search = props => {
  return (
    <React.Fragment>
      <SearchInput
        type="text"
        value={props.searchTerm}
        onChange={props.searchInput}
        placeholder="&#128269;Search"
      />
    </React.Fragment>
  );
};

export default Search;
