import React from 'react';

const Modal = ({ photo, index }) => {
  const { id, user_name, photo_title, date_added, url_address, comment } = photo;
  return (
      <div className="modal-container">
        <img className="modal-image" alt="" src={url_address} index={index}/>
        <div className="title">{photo_title}</div>
      <div className="subtitle">{date_added.slice(0, 10)}</div>
      <strong className="title">{user_name}</strong>
      <div className="subtitle">{comment}</div>
    </div>
  )
};

export default Modal;
