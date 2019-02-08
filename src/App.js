import React, { Component } from 'react';
import ButtonProfil from "./Components/ButtonProfil/ButtonProfil";
import Post from "./Components/Post/Post";
import Profil from "./Components/Profil/Profil";
import './App.css';

const profil1 = {
    
    id : 1,
  profil: {
    contenu: {
        prenom: "Loic",
        nom: "B.",
        naissance: "12/12/12" 
    },
      photo :{
    src: "http://st.gdefon.com/wallpapers_original/wallpapers/11593_mister-bin-na-otdyxe_or_mr-beans-holiday_1600x1200_(www.GdeFon.ru).jpg",
    alt: "loicB"
  }
   
  },
  
  pos: {
    like: 1,
    texte:"babla"
  }
}

const profil2 = {
     id : 2,
  profil: {
    contenu: {
        prenom: "Gerome",
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

const profil3 = {
     id : 3,
  profil: {
    contenu: {
        prenom: "Halber",
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
    
    
    constructor(props) {
    // Obligatoire
    super(props);
    // on crée le state dans le constructor
    this.state = {
      profilactuel: profil1
    };
  }
    
    
    actuelProfilCallback = (profilactuel) => {
this.setState({ profilactuel: profilactuel})
    };
        
        
  render() {
      const {profilactuel}=this.state;
      const profilafficher = profilactuel.profil;
      const profilpost= profilactuel.pos;
    return (
       <div className="facebook-container">
        <ButtonProfil callbackprofil={this.actuelProfilCallback} content={profil1} />
        <ButtonProfil callbackprofil={this.actuelProfilCallback} content={profil2} />
        <ButtonProfil callbackprofil={this.actuelProfilCallback} content={profil3} />
        <Profil content={profilafficher} />
        <Post pos={profilpost} />
      </div>
    );
  }
}

export default App;



