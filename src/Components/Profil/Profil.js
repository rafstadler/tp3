import React, { Component } from 'react';
import "./Profil.css";
import Photo from "./Photo/Photo";
import Contenu from "./Contenu/Contenu";

class Profil extends Component {
    
     constructor(props) {
    // Obligatoire
    super(props);
    // on crée le state dans le constructor
    this.state = {
      couleur: "vert",
        classname: "facebook-profil-container"
    };
  }
    
    changeStyle = () => {
        if (this.state.couleur === "vert"){
            this.setState({
                couleur: "orange"
                });
        }else{
            this.setState({
                couleur: "vert"
                });
        }
  };

  render() {

    // const author = this.props.tweetData.author;
    // const content = this.props.tweetData.content;
    // const image = this.props.tweetData.image; 

    // SAME
    const { contenu , photo } = this.props.content;
      const { couleur , classname }  = this.state;
      let couleurclass = classname+' '+couleur;

    return(
      <div className={couleurclass}>
        <Photo photo={photo}/>
        <Contenu contenu={contenu}/>
        <button type="button" onClick={this.changeStyle}> Changer style </button>
      </div>
    );
  }
}

export default Profil;