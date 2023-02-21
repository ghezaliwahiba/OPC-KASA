import { NavLink } from "react-router-dom";
import React,{useState,useEffect} from 'react';
import "./Card.css";


function Card() { 
  // stocker le retour de l'API dans le  state ,
  const [DataLog, setData] = useState([]); 
  const getData=()=>{ 
    fetch('data.json' 
  
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
  useEffect(()=>{ //appeler useEffect, pour récupérer les appartements.
    getData()
  },[]) 


  return (
    <section className="cards">
    {DataLog.map((data) => ( 
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


 
