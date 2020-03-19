/* eslint-disable import/extensions */
import React, { Component } from 'react';
import { ajax } from 'jquery';
import PhotoCard from './PhotoCard.jsx';
// import Arrow from './Arrows.jsx';
import ModalCarousel from './ModalCarousel.jsx';

// const data = require('../../../db/seeders/data.js');


class PhotoCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      show: false,
    };
    // this.handleClick = this.handleClick.bind(this);
    this.showModal = this.showModal.bind(this);
    this.hideModal= this.hideModal.bind(this);
  }

  componentDidMount() {
    ajax({
      type: 'GET',
      url: '/seeAllPhotos',
      success: (photos) => this.setState({ photos }),
      error: (error) => console.log('error', error),
    });
  }

  showModal() {
    this.setState({ show: true });
  };

  hideModal() {
    this.setState({ show: false });
  };
  
  // nextPhoto() {
  //   const newIndex = this.state.clickedPhoto;
  //   this.setState({
  //     show: false,
  //   });
  // }

  // prevPhoto() {
  //   const newIndex = this.state.clickedPhoto;
  //   this.setState({

  //   });
  // }


  render() {
    const { photos, show } = this.state;
    return (
      <div className="carousel">
        <ModalCarousel show={show} handleClose={this.hideModal} photos={photos}/>
       
        <div className="button">
        <button className="main-view" type="button" onClick={this.showModal}>See All Photos</button>
        </div>
        <div
          className="slide-arrow-left"
          direction="left"
          clickFunction={this.prevPhoto}
        />
        <PhotoCard photos={photos} />
        <div
          className="slide-arrow-right"
          direction="right"
          clickFunction={this.nextPhoto}
        />
      </div>
    );
  }
}

export default PhotoCarousel;
