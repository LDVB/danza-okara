import ContactUs from "../ContactUs/ContactUs";
import "./Formulario.css";
import React, { useRef } from 'react';

const Formulario = () => {
  return (
    <>
      <div className="titulo-formulario">
        ¿Tienes ganas de bailar? <br />
        ¿Por qué no hablamos?
      </div>
      <ContactUs/>
      
    </>
  );
};

export default Formulario;
