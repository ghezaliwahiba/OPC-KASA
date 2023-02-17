
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Carousel from '../../components/Caroussel/Caroussel';
import '../Caroussel/Caroussel.css';
import Collapse from '../Collapse/Collapse';
import Rate from '../../components/Ratings/Ratings';


const Logement = () => {
  const params = useParams();
  //=> pendra ici l'id en paramètre
  const [data, setData] = useState();
  //=> permet de changer l'état des données avec data comme variable avec valeur initiale et sa fonction setData fonction qui prend la modification
  const navigate = useNavigate();
  //=> permet une redirection, une navigation vers la page 404 ici

  useEffect(() => {//=> permet d'effectuer une action, ici une requête GET, à un moment donné du cycle de vie du composant
  const getLogement = async () => {
    const result = await axios.get("/data.JSON"); //axios va me chercher l'Url, récupère les data sans besoin de convertir au format json
    const logement = result.data.find(({ id }) => id === params.id);
    //console.log(logement);
    //console.log(logement.id);
    //console.log(logement.pictures);
    // console.log(logement.title);
    // console.log(logement.location);
    // console.log(logement.pictures.length);
    setData(logement);

    if (logement === undefined || null) {
      navigate("/Erreur", { state: { message: "error" } });
    }
  };
  getLogement();
}, []);
  //Quand nous voulons afficher la valeur actuelle de LogData dans une classe, nous récupérons la valeur de this.state.data
  //Dans une fonction, nous pouvons directement utiliser LogData
  //Dans une classe, nous devons appeler this.setState() pour mettre à jour l’état data
  //Dans une fonction, nous récupérons directement setData et LogData comme variables, nous n’avons donc pas besoin de this :

  return (
    data && (
      <div className="FicheLogement">
          <div className="banner-fiche">
            <Carousel
              slide={data.pictures}
            />
          </div>
      <section className="coucou">  
        <section className="InfoSection">
            <div className="divTitle">
              <h1 className="ficheTitle">{data.title}</h1>
              <p className="localisation">{data.location}</p>
             </div>

             <div className="tags">
                {data.tags.map((tag) => (
                  <li key={tag} className="tag">{tag}</li>
                ))}
              </div>

          
        </section>

        <section className="TagsRatings">
            <div className="InfoHost">
                <span className="NameHost">
            {data.host.name}
            </span>
            <span className="PictureHost">
              <img className="ImageHost"
          src={data.host.picture}
          alt="photohost"
        />
        </span>
        </div>
              <div className="Ratings">
              <Rate Ratings={data.rating} />
              </div>  
              
              
              </section>
              </section>

            

            <section className="DescrEquip">
              
              <div className="Divcollapse__logement">
   <Collapse className="collapses-logement" title="Description" description = {data.description}/>
   </div>
   <div className="Divcollapse__logement">
   <Collapse className="collapse__logement"  title="Equipements"
               description={data.equipments.map((equip) => (
                <li key={equip} className="equipement">
                  {equip}
                </li>
              ))}
            />
            </div>
     </section>
     </div>
    
    )
  );
};

export default Logement;
