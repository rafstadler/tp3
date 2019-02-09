import React, { Component } from 'react';
import './Post.css';

class Post extends Component {
    
    
    
     liker= () => {
        this.props.likecallback();
    };


  render() {
    const { pos } = this.props.poste;
    const { like , texte } = pos;
    // PAREIL QUE
    // const { content } = this.props;
    return (
      <div className="facebook-post-container">
        <p>{texte}</p>
        <p>{like}</p>
        <button type="button" onClick={() => this.liker()} >Like</button>
      </div>
    );
  }
}

export default Post;