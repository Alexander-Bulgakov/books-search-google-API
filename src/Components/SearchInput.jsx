import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import searchIcon from '../images/icons8-search.svg';
import BooksStore from '../store/BooksStore';
import './SearchInput.scss';

const SearchInput = observer (() => {

  const[search, setSearch] = useState('');

  const refreshStoreData = () => {
    BooksStore.books = [];
    BooksStore.startIndex = 0;
  }
  
  const onSearch = () => {
    refreshStoreData();
    BooksStore.setSearchText(search);
    BooksStore.getBooksFromAPI();
  }

  const handleClick = () => {
    onSearch();
  }
  
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      onSearch();
    }
  }

  return(
    <div className="input">
      <input 
        type="text" 
        className="input__field"
        onChange={(event) => setSearch(event.target.value)}
        onKeyDown={handleKeyDown}
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