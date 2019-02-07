import React, { Component } from 'react';
import './ButtonProfil.css';

class ButtonProfil extends Component {
  render() {
       const nom  = this.props.content;
    
    return (
      <div className="facebook-buttonprofil">
        <button type="button">{nom}</button>
      </div>
        
    );
  }
}

export default ButtonProfil;