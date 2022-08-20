import React from 'react';
import './card.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faHeart, faEye } from '@fortawesome/free-solid-svg-icons';
export default function Card(props) {
  
  return (
    <>
      <div className="card">
        <div className="icons">
          <a href="#">
            {' '}
            <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
          </a>
        </div>
        <div className="image">
          <img src={props.product.thumbnail} alt="" />
        </div>
        <div className="content">
          <h3>{props.product.title}</h3>
          <div className="price">
            ${props.product.discountPercentage} <span>${props.product.price}</span>
          </div>
          <a href="#" className="btn">
           + cart
          </a>
        </div>
      </div>
    </>
  );
}
