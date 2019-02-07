import React, { Component } from 'react';
import './Contenu.css';

class Contenu extends Component {
  render() {
       const { contenu } = this.props;
    const { nom , prenom , naissance } = contenu;
    
    // PAREIL QUE
    // const { content } = this.props;
    return (
      <div className="facebook-content-container">
        <p>{nom}</p>
        <p>{prenom}</p>
        <p>{naissance}</p>
        
      </div>
        
    );
  }
}

export default Contenu;