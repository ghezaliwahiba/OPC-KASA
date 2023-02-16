import React from "react";
import EtoileVide from'../../Images/etoile-vide.svg';
import EtoilePleinne from '../../Images/étoile-pleienne.svg';
import './Ratings.css'

function Ratings({Ratings}){
   const stars = [];
    for (let i = 0; i < 5; i++) {
        // Ceci sera exécuté 5 fois
  // À chaque éxécution, la variable "i" augmentera de 1
  // Lorsque'elle sera arrivée à 5, le boucle se terminera.
      if (i < Ratings) {
        stars.push(<img src={EtoilePleinne} alt="full-star" key={i} />);
      } else {
        stars.push(<img src={EtoileVide} alt="empty-star" key={i} />);
      }
    }
    return <div className="Stars">{stars}</div>;
  };

export default Ratings;