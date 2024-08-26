import "./ContactoAmigos.css";

import React, { useEffect } from 'react';
import AOS from 'aos';
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import 'aos/dist/aos.css';

const ContactoAmigos = () => {
  useEffect(() => {
    AOS.init({
      duration: 3000,
    });
  }, []);


  return (
    <div className="textoyFoto">
      <div className="box1">
        <img
          className="img-amigos1"
          alt="Club de Amigos en el escenario"
          src="https://res.cloudinary.com/ddtolhmab/image/upload/v1724696721/clubamigos_k6lbj0.jpg"
        />
      </div>
      <div className="textos-amigos">
        <p className="title">Nos encanta lo que hacemos. Y como lo hacemos</p>
        <p className="texto-amigos">
          ¿Estás listo para aprender nuevos pasos y divertirte mientras bailas? <br/>
          ¡Ven y únete a nosotros! ¡Apúntate y comienza a bailar hacia una nueva
          pasión!
        </p>
        
        <Button className="boton_Amigos" data-aos="zoom-in">
          <Link to="/contactanos" className="link-none">
            <p className="color-Amigos">¡Apuntate!
           </p>
          </Link>
        </Button>        
      </div>
    </div>
  );
};

export default ContactoAmigos;
