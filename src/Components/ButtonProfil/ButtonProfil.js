import React, { Component } from 'react';
import './ButtonProfil.css';

class ButtonProfil extends Component {
    
    
    changeActuel= () => {
        this.props.callbackprofil(this.props.content);
    };

  render() {
      
      
       const {prenom}  = this.props.content.profil.contenu;
    
    return (
      <div className="facebook-buttonprofil">
        <button onClick={() => this.changeActuel()} type="button">{prenom}</button>
      </div>
        
    );
  }
}

export default ButtonProfil;