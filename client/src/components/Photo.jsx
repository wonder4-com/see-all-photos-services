import React from 'react';
// import styles from './photoStyle.css.js';

const Photo = ({ photo }) => {
  const styles = {
    width: '75%',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div>
      <div>
      <img className="image" style={styles} src={photo.url_address} />
      </div>
      {photo.photo_title}
      {photo.date_added}
      {photo.user_name}
      {photo.comment}
    </div>
  );
};

export default Photo;
