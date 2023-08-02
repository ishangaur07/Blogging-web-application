import classes from './SepCard.module.css';
import { Link } from 'react-router-dom';
import React from 'react';

const SepCard = ({ heading, author, image, content,id }) => {
 

  return (
    <div className={classes.card}>
      <img src={image} alt="blog" srcset="" />
      <div className={classes.cardInfo}>
        <h2>{heading}</h2>
        <p>By <i>{author}</i></p>
        <p className={classes.content}>{content}</p>
        <Link to={`/readmore/${id}`}><button className={classes.button}>Read More</button></Link>
      </div>
    </div>
  );
};

export default SepCard;