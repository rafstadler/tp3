import React, { Component } from 'react';
import './ButtonProfil.css';

class ButtonProfil extends Component {
    
    
    changeActuel= () => {
        this.props.callbackprofil(this.props.content);
    };

  render() {
      
      
       const {nom}  = this.props.content;
    
    return (
      <div className="facebook-buttonprofil">
        <button onClick={() => this.changeActuel()} type="button">{nom}</button>
      </div>
        
    );
  }
}

export default ButtonProfil;