import React, { Component } from 'react';
import { ajax } from 'jquery';
import PhotoCard from './PhotoCard.jsx';
// import { View, ScrollView } from 'react-native';

class PhotoCarousel extends Component {
  // scrollRef = React.createRef();
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      photoIndex: 0,

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
    // const { photoIndex } = this.state;
    return (
      <div className="carousel">
        Hello Photos!
        <PhotoCard photos={photos} />
        <button type="button" onClick={() => this.nextPhoto()}>Next</button>
        <button type="button">Previous</button>
        <form action="/profile" method="post" encType="multipart/form-data">
          <input type="file" name="avatar" />
        </form>
      </div>
    );
  }
}

export default PhotoCarousel;
