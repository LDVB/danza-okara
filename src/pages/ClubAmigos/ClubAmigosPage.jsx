import React from 'react';
import { Helmet } from "react-helmet";
import { Container } from "react-bootstrap";
import "./ClubAmigosPage.css";
import BannerClubAmigos from "../../components/BannerClubAmigos/BannerClubAmigos";
import TextoAmigos from "../../components/TextoAmigos/TextoAmigos";
import Experiencias from "../../components/Experiencias/Experiencias";
import ContactoAmigos from "../../components/ContactoAmigos/ContactoAmigos";

const ClubAmigosPage = () => {
  return (
    <>
    <Helmet>
        <title>Danza Okara - Club Amigos</title>
        <meta name="description" content="Únete al Club de Amigos y forma parte de nuestra comunidad. Disfruta de eventos especiales y mucho más" />
        <meta name="keywords" content="Alcorcón, Madrid, Club de Amigos, comunidad de danza oriental" />
      </Helmet>
      <BannerClubAmigos />
      <Container>
        <div className="texto1-motiv">
          Tanto si estás explorando los movimientos fluidos como si te sumerges
          en los ritmos vibrantes...
        </div>
        <p className="texto2-motiv">¡Ven con nosotros al mundo del baile!</p>
        <TextoAmigos/>
        <Experiencias/>
        <ContactoAmigos/>
       
      </Container>
    </>
  );
};

export default ClubAmigosPage;
