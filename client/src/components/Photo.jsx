import React from 'react';


const Photo = ({ photo }) => (
  <div>
    <img src={photo.url_address} />
    {photo.photo_title}
    {photo.date_added}
    {photo.user_name}
    {photo.comment}
    This is your Photo!
  </div>
);

export default Photo;
