import React from 'react';
import './forthCard.css';

export const ForthCard = (props) => {
  return (
    <>
      <div className="card-boxes ">
        <div className="image">
          <img src={props.image} alt="" />
        </div>
        <div className="content ">
          <div className="title">
            <h3 >{props.post.title}</h3>
          </div>
          <div className="description">
            <h4>{props.post.body}</h4>
          </div>
        </div>
        <a href= {`/Blogs/${props.post.id}`} className="btn">
          read more
        </a>
      </div>
    </>
  );
};
