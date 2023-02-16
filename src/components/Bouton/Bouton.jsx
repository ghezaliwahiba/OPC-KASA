import React, { useState } from 'react';//Un Hook est une fonction qui permet de « se brancher » sur des fonctionnalités React

import chevron from '../../Images/chevron down.png';
import './Bouton.css'

const Button = () => {
    const [btnActive, setBtnActive] = useState(false);//=> variable d'état qui permet d’utiliser un état local dans une fonction composant/déstructuration positionnelle

    function handleClick() { //Pour créer un bouton deoulant  j'ai déclarer une fonction  handleClick
        setBtnActive(!btnActive);
    }
    
    return (
        <button className={`${btnActive && "btnActiveclasse"}`} onClick={handleClick} >
            <img src={chevron} alt="bouton déroulant" />
        </button>
    );
};

export default Button;