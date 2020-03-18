import React, { Component } from 'react';

import ModalCard from './ModalCard.jsx';
const Modal = ({ handleClose, show, children }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";

class ModalCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // should determine the clicked photo url and display that in the main window
      clickedPhoto: {},
    };
    this.prevPhoto = this.prevPhoto.bind(this);
    this.nextPhoto = this.nextPhoto.bind(this);
  }

  nextPhoto() {
    const newIndex = this.state.clickedPhoto;
    this.setState({

    });
  }

  prevPhoto() {
    const newIndex = this.state.clickedPhoto;
    this.setState({

    });
  }

  render() {
    return (
      <main>
        <div
          className="slide-arrow-left"
          direction="left"
          clickFunction={this.prevPhoto}
        />
        <div className={showHideClassname}>
      <section className="modal-main">
        {children}
        <button onClick={handleClose}>close X</button>
      </section>
    </div>
    
        <ModalCard photos={photos} />

        <div
          className="slide-arrow-right"
          direction="right"
          clickFunction={this.nextPhoto}
        />
      </main>
    );
  }
}

export default ModalCarousel;
