import React from 'react';
import BooksStore from '../store/BooksStore';
import { observer } from 'mobx-react-lite';
import './Main.scss';
import Card from './Card';

const LoadMoreButton = () => {

  // const handleClick = () => {
  //   BooksStore.setBooks('react');
  // }

  if (BooksStore.loadMoreButton){
    return(
      <button 
      // onClick={handleClick}
      >Load more</button>
    )
  } else {
    return null;
  }
}

const Main = () => {
  return(
    <>
      <h3 className="search-count">Found {BooksStore.totalItems} results</h3>
      <div className="main-container">
        {BooksStore.books?.map(item => (
          <Card 
            key={item.id}
            categories={item.volumeInfo.categories}
            title={item.volumeInfo.title}
            authors={item.volumeInfo.authors}
            image={item.volumeInfo?.imageLinks?.smallThumbnail}
          />
          )
        )}
      </div>
      <LoadMoreButton />
    </>
  )

}

export default observer(Main);