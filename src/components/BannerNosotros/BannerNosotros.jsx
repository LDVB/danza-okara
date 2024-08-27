import "./BannerNosotros.css";
import React from 'react';


const BannerNosotros = () => {
  return (
    <div className="BannerNosotros">
      <img
        className="img-BannerNosotros"
        alt="Puesta en escena coreografia"
        src="https://res.cloudinary.com/ddtolhmab/image/upload/v1724696728/nosotrosBanner_fzjjb1.jpg"
      />
      <div class="texto-superpuesto-BannerNosotros">
        <p className="titulo-BannerNosotros">Sobre nosotros</p>  
      </div>
    </div>
  );
};

export default BannerNosotros;
