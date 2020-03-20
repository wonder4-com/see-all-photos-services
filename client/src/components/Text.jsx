import React from 'react';

const Text = ({ photo }) => {
    const { id, user_name, photo_title, date_added, url_address, comment } = photo;
    return(
        <div className="model-text"> 
        <div className="title">{photo_title}</div>
      <div className="subtitle">{date_added.slice(0, 10)}</div>
      <strong className="title">{user_name}</strong>
      <div className="subtitle">{comment}</div>
        </div>
    )
}

export default Text;
