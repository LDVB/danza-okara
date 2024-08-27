import React from 'react';
import { Helmet } from "react-helmet";
import "./Contactanos.css";
import { Container } from "react-bootstrap";
import BannerContactanos from "../../components/BannerContactanos/BannerContactanos";
import ContactUs from "../../components/ContactUs/ContactUs";
import ContactCards from "../../components/ContactCards/ContactCards";

const ContactanosPage = () => {
  return (
    <>
    <Helmet>
        <title>Danza Okara - contáctanos</title>
        <meta name="description" content="Ponte en contacto con nosotros para obtener más información sobre nuestras clases, eventos y cómo unirte a nuestra comunidad de danza oriental. ¡Estamos aquí para ayudarte!"/>
        <meta name="keywords" content="Alcorcón, Madrid, contáctanos, información de contacto, clases de danza oriental, eventos de danza, unirse a la comunidad, contacto de la escuela" />
      </Helmet>
      <BannerContactanos />
      <Container className="enLinea">
        <ContactCards />
        <ContactUs />
      </Container>
    </>
  );
};

export default ContactanosPage;
