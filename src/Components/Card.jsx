import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Card.scss';

const Card = ( { index, categories, title, authors, image } ) => {
  const navigate = useNavigate();

  const handleClick = () => {
    console.log(index);
    navigate('/detailPage');
  }

  return(
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
  )
}
export default Card;