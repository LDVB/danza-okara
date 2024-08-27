import "./Tablones.css";
import { Link } from "react-router-dom";
import { Container, Carousel} from "react-bootstrap";

const Tablones = () => {
  return (
    <> <Container className="tablones-desktop">
      <div className="tablones">
        <div className="tablon">
          <p className="titulo-tablon">Galería de Fotos</p>
          <p className="texto">
            Déjate llevar por la pasión y la magia de la danza oriental a través
            de la galería de fotos.
          </p>

          <Link to="/galeria"><p className="texto">
            Ver más
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </p></Link>
        </div>
        <div className="tablon">
          <p className="titulo-tablon">Clases y Talleres</p>
          <p className="texto">
            Sumérgete en un mundo de movimiento y expresión de nuestras clases.{" "}
          </p>
          <Link to="/clases"><p className="texto">
            Ver más
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </p></Link>
        </div>
        <div className="tablon">
          <p className="titulo-tablon">Nuestro Proyecto</p>
          <p className="texto">
            Bienvenido a nuestra escuela de danza, donde la emoción y la
            creatividad se unen.
          </p>
          
          <Link to="/sobreNosotros"> <p className="texto">
            Ver más
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </p></Link>
        </div>
      </div>
      <div>
      </div>
      </Container>
      <Carousel data-bs-theme="dark" className="carrousel-tablones">
      <Carousel.Item>
        <img
          className="d-block w-100 "
          src="https://res.cloudinary.com/ddtolhmab/image/upload/v1724696722/fondoCarrousel_vzzdjm.png"
          alt="First slide"
        />
        <Carousel.Caption>
        <p className="titulo-tablon">Galería de Fotos</p>
          <p className="texto-tablon">
            Déjate llevar por la pasión y la magia a través
            de la galería de fotos.
          </p>
          <Link to="/galeria" >
          <p className="texto-tablon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </p></Link>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://res.cloudinary.com/ddtolhmab/image/upload/v1724696722/fondoCarrousel_vzzdjm.png"
          alt="Second slide"
        />
        <Carousel.Caption>
        <p className="titulo-tablon">Clases y Talleres</p>
        <p className="texto-tablon">
            Sumérgete en un mundo de movimiento y expresión de nuestras clases.{" "}
          </p>
          <Link to="/clases" >
          <p className="texto-tablon">

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </p></Link>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://res.cloudinary.com/ddtolhmab/image/upload/v1724696722/fondoCarrousel_vzzdjm.png"
          alt="Third slide"
        />
        <Carousel.Caption>
        <p className="titulo-tablon">Nuestro Proyecto</p>
          <p className="texto-tablon">
            Bienvenido a nuestra escuela, donde la emoción y la
            creatividad se unen.
          </p>
          <Link to="/sobreNosotros" > 
            <p className="texto">
      
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </p></Link>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
      


    </>
  );
};

export default Tablones;
