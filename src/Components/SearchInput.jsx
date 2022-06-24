import React, { useEffect, useState } from 'react';
import axios from 'axios';
import searchIcon from '../images/icons8-search.svg';
import './SearchInput.scss';
import BooksStore from '../store/BooksStore';
import { observer } from 'mobx-react-lite';

const SearchInput = observer (() => {

  const[search, setSearch] = useState('');

  const handleClick = () => {
    BooksStore.setSearchText(search);
    BooksStore.getBooksFromAPI();
    console.log(search);
  }

  const onSearchBook = (event) => {
    if (event.key === 'Enter') {
      BooksStore.setSearchText(search);
      BooksStore.getBooksFromAPI(search);
      console.log(event.target.value);
    }
  }

  return(
    <div className="input">
      <input 
        type="text" 
        className="input__field"
        onChange={(event) => setSearch(event.target.value)}
        onKeyDown={onSearchBook}
        value={search}
        />
      <img 
        src={searchIcon} 
        alt="search" 
        className="input__icon" 
        onClick={handleClick} />
    </div>
  )
})

export default SearchInput;