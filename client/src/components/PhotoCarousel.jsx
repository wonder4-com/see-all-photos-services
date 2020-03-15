import React, { Component } from 'react';
import { ajax } from 'jquery';
import PhotoCard from './PhotoCard.jsx';

class PhotoCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
    };
  }

  componentDidMount () {
    ajax({
      type: 'GET',
      url: '/seeAllPhotos',
      success: photos => this.setState({ photos }),
      error: error => console.log('error'),
    });
  }

  // nextPhoto = () => {

  // }

  // previousPhoto = () => {

  // }

  render() {
    return (
      <div className="photo-carousel">
        <button type="button"> + </button>
        Hello Photos!
        <PhotoCard photos={this.state.photos} />
        <button type="button"> + </button>
        <form action="/profile" method="post" encType="multipart/form-data">
          <input type="file" name="avatar" />
        </form>
      </div>
    );
  }
}

export default PhotoCarousel;
