import React from "react";
import { useNavigate } from "react-router-dom";
// import BooksStore from "src/store/BooksStore";
import BooksStore from "../store/booksStore";
import "./Card.scss";

const Card = ({ id, categories, title, authors, image }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    const detailItem = BooksStore.books.find((item) => item.id === id);
    BooksStore.setDetailItem(detailItem);
    navigate("/detailPage");
  };

  return (
    <div className="card" onClick={handleClick}>
      <div className="image-wrapper">
        <img src={image} alt="Book cover" className="card__image" />
      </div>
      <div className="card-description">
        <div className="card__category">{categories}</div>
        <h4 className="card__title">{title}</h4>
        <div className="card__authors">{authors}</div>
      </div>
    </div>
  );
};
export default Card;
