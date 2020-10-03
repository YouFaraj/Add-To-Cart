import React from 'react';
import './card.css';


const Card = ({image, title, price}) => {
  return (
    <div className="card">
      <img src={image} />
      <h6>{title}</h6>
      <h6>{price}</h6>
    </div>
  )
}


export default Card;