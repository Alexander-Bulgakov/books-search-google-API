import React, { useEffect, useState } from "react";
import BooksStore from "../store/booksStore";
import "./BookDetailPage.scss";

const BookDetail = () => {
  const [book, setBook] = useState({});

  useEffect(() => {
    setBook(BooksStore.detailItem);
  }, []);

  return (
    <div className="detail-page">
      <div className="split cover">
        <div className="image-wrapper">
          <img src={book.volumeInfo?.imageLinks?.thumbnail} alt="Book cover" />
        </div>
      </div>
      <div className="split description">
        <div className="description__category">
          {book.volumeInfo?.categories}
        </div>
        <h4 className="description__title">{book.volumeInfo?.title}</h4>
        <div className="description__authors">{book.volumeInfo?.authors}</div>
        <p className="description__description-text">
          {book.volumeInfo?.description}
        </p>
      </div>
    </div>
  );
};

export default BookDetail;
