import React, { Component } from 'react';
import ButtonProfil from "./Components/ButtonProfil/ButtonProfil";
import Post from "./Components/Post/Post";
import Profil from "./Components/Profil/Profil";
import './App.css';



class App extends Component {
    
    
    constructor(props) {
    // Obligatoire
    super(props);
    // on crée le state dans le constructor
    this.state = {
      
      profil1 : {
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
                like: 0,
                texte:"babla"
              }
            },

        profil2 : {
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
            like: 0,
            texte:"azertyu"
          }
        },

        profil3 : {
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
            like: 0,
            texte:"azertyu"
          }
        },
        
        profilactuel: ""
    };
        
        this.state.profilactuel=this.state.profil1;
  }
    
    
    
    actuelProfilCallback = (profilactuel) => {
this.setState({ profilactuel: profilactuel});
    }

   likecallback = () => {
        this.setState({ like: this.state.profilactuel.pos.like++});
       
   }
        
        
  render() {
      const {profilactuel}=this.state;
      const profilafficher = profilactuel.profil;
    return (
       <div className="facebook-container">
        <ButtonProfil callbackprofil={this.actuelProfilCallback} content={this.state.profil1} />
        <ButtonProfil callbackprofil={this.actuelProfilCallback} content={this.state.profil2} />
        <ButtonProfil callbackprofil={this.actuelProfilCallback} content={this.state.profil3} />
        <Profil content={profilafficher} />
        <Post likecallback={this.likecallback} poste={profilactuel} />
      </div>
    );
  }
}

export default App;



