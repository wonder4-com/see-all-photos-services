import React from 'react';
import ModalDisplay from './ModalDisplay.jsx';

class ModalCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPhoto: this.props.photos[0],
    };
  }

  nextPhoto() {
    const { photos } = this.props;
    this.setState({
      selectedPhoto: photos[index + 1],
    });
  }

  prevPhoto() {
    const { photos } = this.props;
    this.setState({
      selectedPhoto: photos[index - 1],
    });
  }

  render() {
    const { selectedPhoto } = this.state;
    const showHideClassName = this.props.show ? 'modal display-block' : 'modal display-none';
    return (
      <div>
        <div className={showHideClassName}>
          <section className="modal-container">
            <ModalDisplay
              photos={this.props.photos}
              nextPhoto={this.nextPhoto}
              prevPhoto={this.prevPhoto}
            />
            <button onClick={this.props.handleClose}>close X</button>
          </section>
        </div>
      </div>
    );
  }
}

export default ModalCarousel;
