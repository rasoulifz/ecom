import React from 'react';
import './secondCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import _ from 'lodash';

export default function SecondCard(props) {
  const rates = _.range(0, Math.floor(props.product.rating));
  const halfRate = props.product.rating - Math.floor(props.product.rating);
  return (
    <>
      <div className="arrival-box container">
        <a className="box">
          <div className="image">
            <img src={props.product.thumbnail} alt="" />
          </div>
          <div className="content">
            <h3>{props.product.title}</h3>
            <div className="price">
              {' '}
              ${props.product.discountPercentage}{' '}
              <span>${props.product.price}</span>
            </div>
            <div className="stars">
              {rates.map((rate) => (
                <FontAwesomeIcon
                  color="#30944e"
                  icon={faStar}
                ></FontAwesomeIcon>
              ))}
              {{ halfRate } !== 0 && (
                <FontAwesomeIcon
                  color="#30944e"
                  icon={faStarHalfAlt}
                ></FontAwesomeIcon>
              )}
            </div>
          </div>
        </a>
      </div>
    </>
  );
}
