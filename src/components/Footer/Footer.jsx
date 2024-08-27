import "./Footer.css";
import { Link } from "react-router-dom";
import { Container, Nav } from "react-bootstrap";
import React from 'react';


function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Container>
      <Nav className="footer">
        <div className="logos">
          <img
            alt="Logo Danza Okara"
            src="https://res.cloudinary.com/ddtolhmab/image/upload/v1724696728/LogoDO_cnsgze.png"
            width="43px"
            height="auto"
            className="d-inline-block align-top"
          />
          <Link to="/" className="link-none" onClick={scrollToTop}>
            <p className="titulo-footer-DO">Danza Okara</p>
          </Link>
          <div className="logos-footer">
            <a
              href="https://www.instagram.com/danzaokara/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="logo" src="https://res.cloudinary.com/ddtolhmab/image/upload/v1724696722/instagram_b0blvi.png" />
            </a>
            <a
              href="https://www.facebook.com/danza.okara/?locale=es_ES"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="logo" src="https://res.cloudinary.com/ddtolhmab/image/upload/v1724696722/facebook_erigmc.png" />
            </a>
          </div>
        </div>
        <div className="footerContainer">
          <div className="pages-footer">
            <Link to="/" className="link-none" onClick={scrollToTop}>
              <p className="titulo-footer">Danza Okara</p>
            </Link>
            <Link
              to="/sobreNosotros"
              className="link-none"
              onClick={scrollToTop}
            >
              <p className="texto-footer">Sobre nosotros</p>
            </Link>
            <Link to="/galeria" className="link-none" onClick={scrollToTop}>
              <p className="texto-footer">Galeria</p>
            </Link>
            <Link to="/clubamigos" className="link-none" onClick={scrollToTop}>
              <p className="texto-footer">Club Amigos & Danza Okara</p>
            </Link>
          </div>
          <div className="clases-footer">
            <Link to="/clases" className="link-none" onClick={scrollToTop}>
              <p className="titulo-footer">Clases</p>
            </Link>
            <Link to="/clases#Iniciacion" onClick={scrollToTop}>
              <p className="texto-footer">Iniciación</p>
            </Link>
            <Link to="/clases#Medio" onClick={scrollToTop}>
              <p className="texto-footer">Medio</p>
            </Link>
            <Link to="/clases#Avanzado" onClick={scrollToTop}>
              <p className="texto-footer">Avanzado</p>
            </Link>
            <Link to="/clases#Latino" onClick={scrollToTop}>
              <p className="texto-footer">Fusión Latino</p>
            </Link>
          </div>
          <div className="contacto-footer">
            <Link to="/contactanos" className="link-none" onClick={scrollToTop}>
              <p className="titulo-footer">Contáctanos</p>
            </Link>
            <p className="texto-footer">
              C. Navales, 49, 28925 <br />
              Alcorcón, Madrid
            </p>

            <a href="tel:+34628683885">
              <p className="texto-footer">+34 628 68 38 85</p>
            </a>

            <a href="mailto:danzaokara@gmail.com">
              <p className="texto-footer">danzaokara@gmail.com</p>
            </a>
          </div>
        </div>
      </Nav>
      <div className="copyRight">Copyright © Danza Okara</div>
    </Container>
  );
}

export default Footer;
