import React from 'react';
import BooksStore from '../store/BooksStore';
import './LoadMoreButton.scss';

const LoadMoreButton = () => {

  const handleClick = () => {
    BooksStore.setLoader();
    BooksStore.getBooksFromAPI();
  }

  if (BooksStore.loadMoreButton){
    return(
      <div className="button-container">
        <button 
        className="button"
        onClick={handleClick}
        >Load more</button>
      </div>
    )
  } else {
    return null;
  }
}

export default LoadMoreButton;