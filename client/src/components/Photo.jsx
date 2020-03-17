/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable camelcase */
import React from 'react';
import {white} from 'color-name';
// import PropTypes from 'prop-types';
// import './photoStyle.css';

const Photo = ({ photo }) => {
  const styles = {
    image: {
      width: '75%',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '50%',
    },
    title: {
      fontSize: 20,
      color: white,
    },
  };

  const {
    // eslint-disable-next-line react/prop-types
    index, user_name, photo_title, date_added, url_address, comment,
  } = photo;
  return (
    <div id={`card-${index}`} className="card">
      <img className="image" style={styles.image} src={url_address} />
      <div className="details">
        <span className="index">{index}</span>
        <p className="title" style={styles.title}>{photo_title}</p>
        <ul>
          <li className="date">{date_added}</li>
          <li className="user-name">{user_name}</li>
          <li className="comment">{comment}</li>
        </ul>
      </div>
    </div>
  );
};

export default Photo;
