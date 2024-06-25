import { Helmet } from "react-helmet";
import { Container } from "react-bootstrap";
import "./HomePage.css";
import Banner from "../../components/Banner/Banner";
import ClasesCards from "../../components/ClasesCards/ClasesCards";
import Invitacion from "../../components/Invitacion/Invitacion";
import Tablones from "../../components/Tablones/Tablones";
import Hero from "../../components/Hero/Hero";


const HomePage = () => {
  return (
    <>
    <Helmet>
        <title>Danza Okara - home</title>
        <meta name="description" content="Bienvenido a Danza Okara, el mejor lugar para aprender a bailar." />
        <meta name="keywords" content="Alcorcón, Madrid, danza oriental, clases de baile, club amigos, galeria, sobre nosotros, contacto" />
      </Helmet>

      <Container>
        <Hero />

        <Tablones />

        <Invitacion />

        <div className="texto-motiv">
          Lo importante <br /> no es cómo bailas, no es lo que bailas,
          <br /> es lo que sientes al bailar
        </div>

        <ClasesCards />
      </Container>
      <Banner />
    </>
  );
};

export default HomePage;
