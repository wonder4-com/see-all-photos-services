import React, { Component } from 'react';
import { ajax } from 'jquery';
import PhotoCard from './PhotoCard.jsx';

class PhotoCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],

    };
    this.nextPhoto = this.nextPhoto.bind(this);
  }

  componentDidMount() {
    ajax({
      type: 'GET',
      url: '/seeAllPhotos',
      success: (photos) => this.setState({ photos }),
      error: (error) => console.log('error', error),
    });
  }

  nextPhoto() {
  //   const newIndex = this.state.photos[+1];
  //   this.setState({
  //     photos,
  //   });
  }

  // previousPhoto = () => {

  // }

  render() {
    const { photos } = this.state;
    return (
      <div className="carousel">
        <button type="button" onClick={() => this.nextPhoto()}>Next</button>
        Hello Photos!
        <button type="button">Previous</button>
        <form action="/profile" method="post" encType="multipart/form-data">
          <input type="file" name="avatar" />
        </form>
        <PhotoCard photos={photos} />
      </div>
    );
  }
}

export default PhotoCarousel;
