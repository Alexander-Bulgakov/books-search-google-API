import React from 'react';
import BooksStore from '../store/BooksStore';
import { observer } from 'mobx-react-lite';
import LoadMoreButton from '../components/LoadMoreButton';
import Loader from '../components/Loader';
import Card from '../components/Card';

const BooksPage = () => {

  return(
    <div className="books-container">
      <h3 className="search-count">Found {BooksStore.totalItems} results</h3>
        <Loader />
      <div className="main-container">
        {BooksStore.books?.map((item, index) => (
          <Card 
            id={item.id}
            key={index}
            categories={item.volumeInfo.categories}
            title={item.volumeInfo.title}
            authors={item.volumeInfo.authors}
            image={item.volumeInfo?.imageLinks?.smallThumbnail}
          />
          )
        )}
      </div>
      <LoadMoreButton />
    </div>
  )
}

export default observer(BooksPage);