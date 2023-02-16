import React, { useState } from 'react'; //useState est un hook qui permet d’ajouter le state local React à des composants fonctions.
import CarousselNext from'../../Images/CarrouselNext.svg';
import CarousselPrevious from'../../Images/CarrousePrevious.svg';
import './Caroussel.css'

function Carrousel({ slide }) {//slide.length(x) = nombre d'images et curentslide(x-1) est l'index de l'image.
 //console.log(slide);

  const [CurentSlide, setIndex] = useState(0); 
  //useState nous renvoie une paire de valeurs dans un tableau de 2 éléments: CurentSlide, setIndex;
  //CurentSlide est la valeur actuelle, et setIndex est une fonction qui permet de la modifier.
  //utiliser l'état pour gérer l'index de mon élément de carrousel. Pour cela, j'ai déclaré ce qui suit avec l'état par défaut à 0 : const [currentIndex, setCurrentIndex] = useState(0).
  console.log(CurentSlide)


  //Les fonctions nextSlide et preventSlide s’occupent des mises à jour de la valeur de CurentSlide lorsque l’utilisateur clique sur le Précédent et Prochain boutons.
  
  function preventSlide() {
    const newSlide = CurentSlide - 1; 
setIndex(newSlide < 0 ? slide.length - 1 : newSlide); 
console.log(newSlide)
    
  }

function nextSlide() {
    const newSlide = CurentSlide + 1; 
    setIndex(newSlide === slide.length ? 0 : newSlide); // vérifier si la diapositive actuelle est égale à la valeur maximale de la diapositive (c'est-à-dire qu'elle est à la dernière diapositive), et lorsque cette condition est vraie, réinitialisez la valeur de la diapositive actuelle à 0 — ramenant les diapositives à la première.
    console.log(newSlide)
  }

  return (
    <div className='slide' >
      <div className='FicheImages'>
       <img
        src={slide[CurentSlide]}
        alt="slide(s) du logement"
        className="slideLogement"
      /> 
      <img className='FlechGauche' src={CarousselPrevious} alt="bouton slide précédent" onClick={preventSlide}/>
        <img className=' FlechDroite' src={CarousselNext} alt="bouton slide suivant"   onClick={nextSlide}/>
  
      </div>
      <div className="compteur">
        {CurentSlide+1}/{slide.length}
      </div>
    </div>
  );
}

export default Carrousel;