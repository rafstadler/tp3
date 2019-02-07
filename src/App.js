import React, { Component } from 'react';
import ButtonProfil from "./Components/ButtonProfil/ButtonProfil";
import Post from "./Components/Post/Post";
import Profil from "./Components/Profil/Profil";
import './App.css';

const profil1 = {
  profil: {
    contenu: {
        prenom: "Loic",
        nom: "B.",
        naissance: "12/12/12" 
    },
      photo :{
    src: "http://www.digital-league.org/wp-content/uploads/2018/02/logo_ece_paris-2-380x230-c-default.png",
    alt: "ECE PARIS"
  }
   
  },
  
  pos: {
    like: "aze",
    texte:"azertyu"
  }
}

class App extends Component {
  render() {
    return (
       <div /*className="facebook-container"*/>
        <ButtonProfil content={profil1.profil.contenu.prenom} />
        <Profil content={profil1.profil} />
        <Post pos={profil1.pos} />
      </div>
    );
  }
}

export default App;



