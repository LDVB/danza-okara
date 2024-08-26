import { Button } from "react-bootstrap";
import './Invitacion.css'

const Invitacion = () => {
    return (
        <div className="invitacion">
          <div className="img-invitacion">
            <img
              className="img-invitacion1"
              alt="bailarina en camerino"
              src="https://res.cloudinary.com/ddtolhmab/image/upload/v1724696728/parte1_hxch1w.png"
            />
            <img
              className="img-invitacion2"
              alt="fondo plano"
              src="https://res.cloudinary.com/ddtolhmab/image/upload/v1724696728/parte2_kosu7o.png"
            />
          </div>

          <div class="texto-superpuesto">
            <p className="titulo-inv">
              Ven <br />a bailar <br />
              con nosotros!
            </p>
            <div className="telf">
              <img
                className="img-icono"
                alt="icono telefono"
                src="https://res.cloudinary.com/ddtolhmab/image/upload/v1724696721/CallIcon_wokd7m.png"
              />
              <a href="tel:+34628683885"><p className="texto-inv">
                628 68 38 85
                <br /> Llámanos
              </p></a>
              
            </div>
            <br />
            <Button className="boton" href="/contactanos">
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
  
  export default Invitacion;