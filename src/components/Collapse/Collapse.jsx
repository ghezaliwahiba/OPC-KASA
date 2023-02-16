import React, {useState} from 'react';
import Bouton from '../Bouton/Bouton'

import './Collapse.css'

//ici, je veux pouvoir choisir de l'afficher ou de le cacher. Pour ça, nous allons utiliser une variable d'état dans notre composant Collapse.
//Dans notre cas, il suffit de créer une variable  isOpen  associée avec la fonction  setIsOpen, et de l'initialiser à false :
//Ce composant récupère 2 props : title, description, nous allons ensuite utiliser Collapse dans les fichiers About et Logements.
//Pour pouvoir interagir, on crée ensuite :
//un bouton pour ouvrir le panier qui sera le seul composant retourné par Cart si le panier est fermé ; setIsOpen(true)
//et un bouton pour fermer le panier setIsOpen(false). 
const Collapse = ({ title, description }) => {
  const [isOpen, setIsOpen] = useState(false);

  return isOpen ? (
    <div className="collapse-box">
      <div className="collapse" onClick={() => setIsOpen(false)}>
        <h2>{title}</h2>
        <Bouton />
      </div>
      <div className="description">
        <p className="pDescription">{description}</p>
      </div>
    </div>
  ) : (
    <div className="collapse-box">
      <div className="collapse" onClick={() => setIsOpen(true)}>
        <h2>{title}</h2>
        <Bouton />
      </div>
    </div>
  );
};

export default Collapse;