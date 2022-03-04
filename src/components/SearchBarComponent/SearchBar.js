import React from 'react';
import './searchBar.scss';

export default function SearchBar({ handleChange, placeholderProp }) {
  return (
    <div data-testid='search-bar'>
      <form>
        <label className="searchLabel" htmlFor='search-bar'>Search</label>

        <input
          type='search'
          className="searchBar"
          placeholder={placeholderProp}
          onChange={handleChange}
          id='search-bar'
        />
      </form>
    </div>
  );
}
