import React from 'react';
import { Helmet } from "react-helmet";
import { Container } from "react-bootstrap";
import BannerNosotros from "../../components/BannerNosotros/BannerNosotros";
import Box from "../../components/Box/Box";
import "./NosotrosPage.css";
import Formulario from "../../components/Formulario/Formulario";

const NosotrosPage = () => {
  return (
    <>
    <Helmet>
        <title>Danza Okara - sobre nosotros</title>
        <meta name="description" content="Conoce más sobre nuestra escuela de danza oriental, nuestra historia, misión y el equipo de profesionales dedicados a enseñarte y guiarte en tu camino en la danza" />
        <meta name="keywords" content="Alcorcón, Madrid, sobre nosotros, escuela de danza oriental, historia de la escuela, misión de la escuela, equipo de danza, profesores de danza" />
      </Helmet>
      <BannerNosotros />
      <Container>
        <Box/>
        <Formulario/>
      </Container>
    </>
  );
};

export default NosotrosPage;
