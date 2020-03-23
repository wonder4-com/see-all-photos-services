import React from 'react';
import SideBar from './SideBar.jsx';

const ModalSideBar = ({ photos }) => {
  return(
    <div className="modal-side-bar">
      {photos.map((photo) => (
        <SideBar key={photo._id} photo={photo} />
  ))
}
</div>
)}

export default ModalSideBar;