import React from 'react';

const Modal = ({ photo, index }) => {
  const { id, user_name, photo_title, date_added, url_address, comment } = photo;
  return (
      <div className="modal-image">
        <img alt="" src={url_address} index={index}/>
    </div>
  )
};

export default Modal;
