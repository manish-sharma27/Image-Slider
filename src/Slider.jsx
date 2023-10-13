import React, { Component } from "react";
import image1 from './images/image1.jpg'
import img2 from './images/img2.jpg'
import img3 from './images/img3.jpg'
const images  = [
  image1,
  img2,
  img3
  
];

class ImageSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
    };
  }

  nextSlide = () => {
    this.setState((prevState) => ({
      currentIndex: (prevState.currentIndex + 1) % images.length,
    }));
  };

  prevSlide = () => {
    this.setState((prevState) => ({
      currentIndex:
        (prevState.currentIndex - 1 + images.length) % images.length,
    }));
  };

  render() {
    return (
      <div className="image-slider">
        <button onClick={this.prevSlide}>Previous</button>
        <img
          src={images[this.state.currentIndex]}
          alt={`Image ${this.state.currentIndex + 1}`}
        />
        <button onClick={this.nextSlide}>Next</button>
      </div>
    );
  }
}

export default ImageSlider;
