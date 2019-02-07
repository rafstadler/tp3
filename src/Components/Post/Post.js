import React, { Component } from 'react';
import './Post.css';

class Post extends Component {
  render() {
    const { pos } = this.props;
    const { like , texte } = pos;
    // PAREIL QUE
    // const { content } = this.props;
    return (
      <div className="facebook-post-container">
        <p>{texte}</p>
        <p>{like}</p>
        <button type="button">Like</button>
      </div>
    );
  }
}

export default Post;