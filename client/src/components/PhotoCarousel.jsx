/* eslint-disable import/extensions */
import React, { Component } from 'react';
import { ajax } from 'jquery';
import PhotoCard from './PhotoCard.jsx';
// import Arrow from './Arrows.jsx';
import ModalCard from './ModalCard.jsx';

// const data = require('../../../db/seeders/data.js');


class PhotoCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      showModal: false,
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
    this.setState({ openModel: true });
  };

  hideModal() {
    this.setState({ openModel: false });
  };
  
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
    const { photos } = this.state;
    return (
      <div className="carousel">
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
