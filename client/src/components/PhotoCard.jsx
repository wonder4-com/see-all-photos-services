/* eslint-disable import/extensions */
import React from 'react';
import Photo from './Photo.jsx';
import {white} from 'color-name';
// import style from './photostyle.css';

// eslint-disable-next-line react/prop-types
const PhotoCard = ({ photos }) => {
  return (
    <div className="card">
    <div className="cards-slider">
      <div className="cards-slider-wrapper">
        {
          // eslint-disable-next-line react/prop-types
    photos.map((photo) => (
      // eslint-disable-next-line no-underscore-dangle
      <Photo key={photo._id} index={photo.index} photo={photo} />
      ))
      }
      </div>
    </div>
  </div>
);
}

export default PhotoCard;
