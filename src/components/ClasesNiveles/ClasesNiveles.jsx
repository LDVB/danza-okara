import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Col, Row } from "react-bootstrap";
import "./ClasesNiveles.css";

const ClasesNiveles = () => {
  useEffect(() => {
    AOS.init({
      duration: 3000,
    });
  }, []);

  return (
    <>
      <div className="clases niveles">
        <p className="titulo-clases-niveles">Niveles</p>
        <p className="texto-clases">
          ¡Únete a nuestras clases y déjate llevar por el ritmo de la danza oriental!
        </p>
      </div>
      <div className="niveles Desktop">
        <div className="niv-right" data-aos="fade-right">
          <img
            className="img-class-nivel"
            alt="bailarinas en escenario percusionando"
            src="https://res.cloudinary.com/ddtolhmab/image/upload/f_auto,q_auto/v1/Danza%20Okara/Percusi%C3%B3n/wissp3oxa1fipvi9u7tc"
          />
          <Col>
            <a href="#Iniciacion" id="Iniciacion" >
              <p className="number">01</p>
            </a>
            <div className="texto-derecha">
              <p className="title-class">Iniciación</p>
              <p className="texto-class">
                Perfecto para aquellos que están dando sus primeros pasos en el mundo de la danza oriental. En esta clase, aprenderás los fundamentos básicos de la danza, incluyendo postura, movimientos básicos y coordinación.
              </p>
              <p className="texto-class">
                Martes: 20:00 - 21:00
                <br />
                Miércoles: 18:30 - 19:30
              </p>
            </div>
          </Col>
        </div>
        <div className="niv-left" data-aos="fade-left" data-aos-delay="100">
          <Col>
            <a href="#Medio" id="Medio">
              <p className="number-left">02</p>
            </a>
            <div className="texto-derecha">
              <p className="title-class">Medio</p>
              <p className="texto-class">
                Para estudiantes que ya tienen experiencia en la danza oriental y desean mejorar sus habilidades. En este nivel, nos enfocamos en técnicas más avanzadas, combinaciones de movimientos y expresión artística.
              </p>
              <p className="texto-class">
                Lunes: 20:00 - 21:00
                <br />
                Jueves: 20:00 - 21:00
              </p>
            </div>
          </Col>
          <img
            className="img-class-nivel-izq"
            alt="Alas de Isis en escenario"
            src="https://res.cloudinary.com/ddtolhmab/image/upload/f_auto,q_auto/v1/Danza%20Okara/Alas%20de%20isis/ooepqxpty7pn29quldta"
          />
        </div>
        <div className="niv-right" data-aos="fade-right" data-aos-delay="200">
          <img
            className="img-class-nivel"
            alt="Coreografia de las guerreras"
            src="https://res.cloudinary.com/ddtolhmab/image/upload/f_auto,q_auto/v1/Danza%20Okara/guerreras/cniogmn8wvpgeu5siwip"
          />
          <Col>
            <p className="number">03</p>
            <div className="texto-derecha">
              <a href="#Avanzado" id="Avanzado">
                <p className="title-class">Avanzado</p>
              </a>
              <p className="texto-class">
                Diseñado para bailarines con experiencia que desean llevar su arte al siguiente nivel. En esta clase, exploramos movimientos complejos, musicalidad, improvisación y coreografía avanzada.
              </p>
              <p className="texto-class">
                Lunes: 19:00 - 20:00
                <br />
                Jueves: 19:00 - 20:00
              </p>
            </div>
          </Col>
        </div>
        <div className="niv-left" data-aos="fade-left" data-aos-delay="300">
          <Col>
            <p className="number-left">04</p>
            <div className="texto-derecha">
              <a href="#Latino" id="Latino">
                <p className="title-class">Fusión Latino</p>
              </a>
              <p className="texto-class">
                Una fusión emocionante de la danza oriental con elementos de danzas latinas. Esta clase combina lo mejor de ambos mundos, ofreciendo una experiencia de baile dinámica y energizante.
              </p>
              <p className="texto-class">
                Jueves: 18:00 - 19:00
              </p>
            </div>
          </Col>
          <img
            className="img-class-nivel-izq"
            alt="bailarinas en grupo fusion latino"
            src="https://res.cloudinary.com/ddtolhmab/image/upload/f_auto,q_auto/v1/Danza%20Okara/Percusi%C3%B3n/gxoo6r4eimvb8dqwwun0"
          />
        </div>
      </div>
      <div className="niveles mobile">
        <div className="figure" data-aos="fade-right">
          <Col>
            <div className="columnaClase">
              <p className="number left">01</p>
              <img
                className="img-class-nivel"
                alt="bailarinas en escenario percusionando"
                src="https://res.cloudinary.com/ddtolhmab/image/upload/f_auto,q_auto/v1/Danza%20Okara/Percusi%C3%B3n/wissp3oxa1fipvi9u7tc"
              />
            </div>
            <a href="#Iniciacionm" id="Iniciacionm">
              <p className="title-class">Iniciación</p>
            </a>
            <div className="texto-derecha">
              <p className="texto-class">
                Perfecto para aquellos que están dando sus primeros pasos en el mundo de la danza oriental. En esta clase, aprenderás los fundamentos básicos de la danza, incluyendo postura, movimientos básicos y coordinación.
              </p>
              <p className="texto-class">
                Martes: 20:00 - 21:00
                <br />
                Miércoles: 18:30 - 19:30
              </p>
            </div>
          </Col>
        </div>
        <div className="figure" data-aos="fade-left" >
          <Col>
            <div className="columnaClase">
              <img
                className="img-class-nivel-izq"
                alt="Alas de isis en escenario"
                src="https://res.cloudinary.com/ddtolhmab/image/upload/f_auto,q_auto/v1/Danza%20Okara/Alas%20de%20isis/ooepqxpty7pn29quldta"
              />
              <p className="number left">02</p>
            </div>
            <div className="texto-derecha">
              <a href="#Mediom" id="Mediom">
                <p className="title-class">Medio</p>
              </a>
              <p className="texto-class">
                Para estudiantes que ya tienen experiencia en la danza oriental y desean mejorar sus habilidades. En este nivel, nos enfocamos en técnicas más avanzadas, combinaciones de movimientos y expresión artística.
              </p>
              <p className="texto-class">
                Lunes: 20:00 - 21:00
                <br />
                Jueves: 20:00 - 21:00
              </p>
            </div>
          </Col>
        </div>
        <div className="figure" data-aos="fade-right" >
          <div className="columnaClase">
            <p className="number left">03</p>
            <img
              className="img-class-nivel"
              alt="Coreografia de las guerreras"
              src="https://res.cloudinary.com/ddtolhmab/image/upload/f_auto,q_auto/v1/Danza%20Okara/guerreras/cniogmn8wvpgeu5siwip"
            />
          </div>
          <Col>
            <div className="texto-derecha">
              <a href="#Avanzadom" id="Avanzadom">
                <p className="title-class">Avanzado</p>
              </a>
              <p className="texto-class">
                Diseñado para bailarines con experiencia que desean llevar su arte al siguiente nivel. En esta clase, exploramos movimientos complejos, musicalidad, improvisación y coreografía avanzada.
              </p>
              <p className="texto-class">
                Lunes: 19:00 - 20:00
                <br />
                Jueves: 19:00 - 20:00
              </p>
            </div>
          </Col>
        </div>
        <div className="figure" data-aos="fade-left">
          <Col>
            <div className="columnaClase">
              <img
                className="img-class-nivel-izq"
                alt="bailarinas en grupo"
                src="https://res.cloudinary.com/ddtolhmab/image/upload/f_auto,q_auto/v1/Danza%20Okara/Percusi%C3%B3n/gxoo6r4eimvb8dqwwun0"
              />
              <p className="number left">04</p>
            </div>
            <div className="texto-derecha">
              <a href="#Latinom" id="Latinom">
                <p className="title-class">Fusión Latino</p>
              </a>
              <p className="texto-class">
                Una fusión emocionante de la danza oriental con elementos de danzas latinas. Esta clase combina lo mejor de ambos mundos, ofreciendo una experiencia de baile dinámica y energizante.
              </p>
              <p className="texto-class">
                Jueves: 18:00 - 19:00
              </p>
            </div>
          </Col>
        </div>
      </div>
    </>
  );
};

export default ClasesNiveles;