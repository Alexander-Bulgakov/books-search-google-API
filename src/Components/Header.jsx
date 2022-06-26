import React from 'react';
import background from '../images/books.jpg';
import SearchInput from './SearchInput';
import CategoriesSelect from './CategoriesSelect';
import SortingSelect from './SortingSelect';
import './Header.scss';

const Header = () => {

  return(
    <header 
      className="header" 
      style={{backgroundImage: `url(${background})`}}
      >
      <div className="header-container">
        <h1 className="header-container__title">Search for books</h1>
        <SearchInput />
        <div className="selects-container">
          <CategoriesSelect />
          <SortingSelect />
        </div>
      </div>
    </header>
  )
}

export default Header;