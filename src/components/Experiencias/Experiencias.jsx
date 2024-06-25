import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Col, Row } from "react-bootstrap";
import "./Experiencias.css";

const Experiencias = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <>
      <div className="experiencias">
        <Col className="columna" data-aos="fade-right">
          <p className="titulo-experiecias">Beneficios</p>
          <p><span className="numberblue">1 </span> Fortalecimiento Muscular</p>
          <p> <span className="numberblue">2 </span>  Expresión Creativa</p>
          <p> <span className="numberblue">3 </span> Fomento del Bienestar Emocional</p>
          <p> <span className="numberblue">4 </span> Mejora de la Coordinación y el Equilibrio</p>
          <p> <span className="numberblue">5 </span> Desarrollo Social</p>
        </Col>
        <div className="barra-lateral" data-aos="fade-down"></div>
        <Col className="columna" data-aos="fade-left">
          <p className="titulo-experiecias">Experiencias</p>
          <p> <span className="numberblue">1 </span>Inmersión en la Música y el Ritmo</p>
          <p> <span className="numberblue">2 </span>Sentido de Logro y Realización Personal</p>
          <p> <span className="numberblue">3 </span>Conexión y Comunicación No Verbal</p>
          <p> <span className="numberblue">4 </span>Diversión y Recreación</p>
          <p> <span className="numberblue">5 </span>Celebración de la Diversidad y la Inclusión</p>
        </Col>
      </div>
    </>
  );
};

export default Experiencias;

