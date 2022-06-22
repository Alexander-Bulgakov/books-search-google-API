import React, { useEffect, useState } from 'react';
import axios from 'axios';
import search from '../images/icons8-search.svg';
import './SearchInput.scss';
import BooksStore from '../store/BooksStore';
import { observer } from 'mobx-react-lite';

const SearchInput = observer (() => {

  const[value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  }

  const handleClick = () => {
    BooksStore.setBooks(value);
    console.log(value);
  }
  return(
    <div className="input">
      <input 
        type="text" 
        className="input__field"
        onChange={handleChange}
        value={value} />
      <img 
        src={search} 
        alt="books search" 
        className="input__icon" 
        onClick={handleClick} />
    </div>
  )
})

export default SearchInput;