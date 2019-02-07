import React, { Component } from 'react';
import "./Photo.css";

class Photo extends Component {
  render() {
    const { photo } = this.props;
    const { src, alt } = photo;
    // PAREIL QUE 
    // const src = this.props.image.src;
    // const alt = this.props.image.alt;

    return (
      <div className="facebook-photo-container">
        <img src={src} alt={alt}/>
      </div>
    );
  }
}


export default Photo;