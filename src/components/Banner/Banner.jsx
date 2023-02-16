
import React from "react";
import banner from "../../Images/banner.png";
import "./Banner.css"
function Banner() {
  return (
    <div className="banner">
      <img className="banner_img" src={banner} alt="Bannière Accueil" />
      <div className="banner_text">
        <h1 className="banner_text_p1">Chez vous, </h1>
        <h1 className="banner_text_p2">partout et ailleurs</h1>
      </div>
    </div>
  )
}

export default Banner;