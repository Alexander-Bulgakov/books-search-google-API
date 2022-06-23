import React, { useState } from 'react';
import background from '../images/books.jpg';
import SearchInput from './SearchInput';
import CategoriesSelect from './CategoriesSelect';
import SortingSelect from './SortingSelect';
import './Header.scss';

const Header = () => {

  return(
    <div 
      className="header" 
      style={{backgroundImage: `url(${background})`}}
      >
      <div className="header-container">
        <h1 className="header-container__title">Search for books</h1>
        <SearchInput />
        <div className="selects-wrapper">
          <CategoriesSelect />
          <SortingSelect />
        </div>
      </div>
    </div>
  )
}

export default Header;