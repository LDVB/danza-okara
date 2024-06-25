import { Helmet } from "react-helmet";
import { Container } from "react-bootstrap";
import BannerClases from "../../components/BannerClases/BannerClases";
import TablonesClases from "../../components/TablonesClases/TablonesClases";
import ClasesNiveles from "../../components/ClasesNiveles/ClasesNiveles";
import Banner from "../../components/Banner/Banner";
import './ClassPage.css'


const ClassPage = () => {
  return (
    <>
    <Helmet>
        <title>Danza Okara - clases</title>
        <meta name="description" content="Descubre nuestras clases de danza oriental en varios niveles. Únete y aprende desde iniciación hasta niveles avanzados con horarios flexibles. ¡Déjate llevar por el ritmo!" />
        <meta name="keywords" content="Alcorcón, Madrid, clases de danza oriental, niveles de danza, clases de iniciación, clases avanzadas, horarios de danza, aprender danza oriental" />
      </Helmet>
      <BannerClases/>
      <Container>
          <div className="texto1-motiv">Todo en el universo tiene ritmo. <br/>Todo baila</div>
        <TablonesClases/>
        <ClasesNiveles/>
      </Container>
      <Banner/>
    </>
  );
};

export default ClassPage;
