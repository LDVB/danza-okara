import "./Banner.css";
import {Button} from "react-bootstrap";

const Banner = () => {
  return (
    <div className="banner">
      <img
        className="img-banner"
        alt="Profesora Conchi Jato"
        src="https://res.cloudinary.com/ddtolhmab/image/upload/v1724696720/alasIsis_ynklem.jpg"
      />
      <div class="texto-superpuesto-banner">
        <p className="titulo-banner">¿Quieres venir a bailar con nosotros?</p>
        
        <Button className="boton-banner" href="/contactanos">
          ¡Escribenos!
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
        </Button>
      </div>
    </div>
  );
};

export default Banner;
