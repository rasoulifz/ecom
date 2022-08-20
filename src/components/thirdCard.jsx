import React from 'react';
import './thirdCard.css';

export default function ThirdCard(props) {
  return (
    
    <>
      <div className="box-card">
        <div className="box-item">
          <div className="image">
            <img src={props.image} alt="" />
          </div>
          <div className="content">
            <h3>{props.post.title}</h3>
            <p>
              {props.post.body}
            
            </p>
            <a href={`/Blogs/${props.post.id}`} className="btn">
              read more
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
