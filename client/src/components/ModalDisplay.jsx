import React from 'react';
import ModalCard from './ModalCard.jsx';


const ModalDisplay = ({ handleClose, show, photos }) => {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none';
  return (
      <div>
        <div className={showHideClassName}>
          <div className="close">
            <ModalCard photos={photos} />
            <button onClick={handleClose}>Close X</button>
          </div>
        </div>
      </div>
  );
};

export default ModalDisplay;