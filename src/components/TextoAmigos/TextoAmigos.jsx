import "./TextoAmigos.css";

import { Col, Row } from "react-bootstrap";

const TextoAmigos = () => {
  return (
    <>
      <div className="textos-Amigos">
        <Col >
          <p className="texto-Amigos">
            Danza Okara y el baile ofrecen mucho más que solo actividad física.
            Son una ventana hacia la expresión creativa, una oportunidad para
            fortalecer el cuerpo y el espíritu, y un camino hacia nuevas
            conexiones sociales y emocionales. En cada paso y cada giro, se
            encuentra una experiencia de crecimiento personal, un sentido de
            logro y una comunidad que te recibe con los brazos abiertos.
          </p>
        </Col>
        <Col >
          <p className="texto-Amigos">
            Únete a nosotros en este emocionante viaje de música, movimiento y
            conexión. Descubre cómo danza Okara y el baile pueden transformar tu
            vida, nutriendo el cuerpo, enriqueciendo el alma y celebrando la
            belleza de la diversidad en cada paso.
          </p>
        </Col>
      </div>
      <img
          className="img-amigos"
          alt="Club de Amigos y Danza Okara en el escenario"
          src="src\assets\clubamigosEscenario.png"
        />
    </>
  );
};

export default TextoAmigos;
