import { NavLink } from "react-router-dom";
import React,{useState,useEffect} from 'react';
import "./Card.css";


function Card() { //useState  permettra de stocker le retour de l'API dans le  state ,
  const [DataLog, setData] = useState([]); //Créez un état en utilisant le useState hook pour stocker ces données et les restituer sur le DOM.
  //DataLog  va nous permettre de stocker l’objet qui a été retourné par l’API.
  const getData=()=>{ //on pourra récupérer les données en faisant fetch('data.json')
    fetch('data.json' //Le chemin d'accès à notre fichier JSON doit être soit 'data.json'ou './data.json'
  
    )
      .then(function(response){
        console.log(response)
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson);
        setData(myJson)


      });
  }
  useEffect(()=>{ //appeler useEffect,  pour récupérer les appartements.
    getData()
  },[]) //Ici, on a donc uniquement besoin d’appeler l’API à la première initialisation de notre composant, et on précise un tableau de dépendances vide dans notre fichier  :
  //Bon, ce n’est pas tout d’afficher le retour de notre API dans la console : on veut que ce soit visible dans notre application !
  //Pour cela, nous allons utiliser le state. À l’aide de useState  , on crée donc : const [DataLog, setData] = useState([]);
  //map()  passe sur chaque élément d'un tableau. Elle lui applique une fonction, et renvoie un nouveau tableau contenant les résultats de cette fonction appliquée sur chaque élément.
  //Dans notre cas, elle va nous permettre de prendre une liste de données, et de la transformer en liste de composants.
  //La méthode  map()  permet facilement d'itérer sur des données et de retourner un tableau d'éléments.
  //les prop  key   (clés) aident React à identifier quels éléments d’une liste ont changé, ont été ajoutés ou supprimés. Vous devez donner une clé à chaque élément dans un tableau, afin d’apporter aux éléments une identité stable.


  return (
    <section className="cards">
    {DataLog.map((data) => ( //Les clés aident React à identifier quels éléments d’une liste ont changé, ont été ajoutés ou supprimés. nous devons donner une clé à chaque élément dans un tableau afin d’apporter aux éléments une identité stable.
      <NavLink to={`/data/${data.id}`} key={data.id}> 
    
        <div className="card_div">
          <img
            src={data.cover}
            alt={data.title}
            className="card_img"
          ></img>
          <p className="card_text">{data.title}</p>
        </div>
        
      </NavLink>
    ))}
  </section>
  )
      }

export default Card;


 