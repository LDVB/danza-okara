import "./TablonesClases.css";

import { Carousel, Row } from "react-bootstrap";

const TablonesClases = () => {
  return (
    <>
      <div className="tablonesClases">
        <Row>
          <div className="tablonClases">
            <p className="tituloClases">Mejora de la condición física</p>
            <p className="textoClases">
            Es una forma de ejercicio que puede mejorar la resistencia cardiovascular, la fuerza muscular y la flexibilidad.
            </p>
          </div>
          <div className="tablonClases">
            <p className="tituloClases">Fortalecimiento del core</p>
            <p className="textoClases">
            Muchos de los movimientos se centran en los músculos del core, puede ayudar a fortalecer los abdominales, la espalda baja y los músculos pélvicos.
            </p>
          </div>
        </Row>
        <Row>
          <div className="tablonClases">
            <p className="tituloClases">Estimulación mental</p>
            <p className="textoClases">
            Aprender coreografías y movimientos complejos puede estimular la función cerebral y mejorar la memoria.
            </p>
          </div>
          <div className="tablonClases">
            <p className="tituloClases">Reducción del estrés</p>
            <p className="texto">
            La danza, puede ser una forma efectiva de liberar el estrés y mejorar el estado de ánimo a través del movimiento y la expresión artística
            </p>
          </div>
         
        </Row>
        <Row>
        <div className="tablonClases">
            <p className="tituloClases">Fomento de la autoconfianza</p>
            <p className="texto">
            La práctica regular de la danza oriental puede ayudar a aumentar la autoestima y la confianza en uno mismo
            </p>
          </div>
          <div className="tablonClases">
            <p className="tituloClases">Socialización</p>
            <p className="texto">
            Brinda la oportunidad de conocer a otras personas con intereses similares, lo que puede fomentar la socialización y el establecimiento de nuevas amistades.
            </p>
          </div>
         
        </Row>
      </div>
      <Carousel data-bs-theme="dark" className="carrousel-tablones">
      <Carousel.Item>
        <img
          className="d-block w-100 "
          src="src\assets\fondoCarrousel.png"
          alt="First slide"
        />
        <Carousel.Caption>
        <p className="tituloClases">Mejora de la condición física</p>
            <p className="textoClases">
            Es una forma de ejercicio que puede mejorar la resistencia cardiovascular, la fuerza muscular y la flexibilidad.
            </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="src\assets\fondoCarrousel.png"
          alt="Second slide"
        />
        <Carousel.Caption>
        <p className="tituloClases">Fortalecimiento del core</p>
            <p className="textoClases">
            Muchos de los movimientos se centran en los músculos del core, puede ayudar a fortalecer los abdominales, la espalda baja y los músculos pélvicos.
            </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="src\assets\fondoCarrousel.png"
          alt="Third slide"
        />
        <Carousel.Caption>
        <p className="tituloClases">Estimulación mental</p>
            <p className="textoClases">
            Aprender coreografías y movimientos complejos puede estimular la función cerebral y mejorar la memoria.
            </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="src\assets\fondoCarrousel.png"
          alt="Third slide"
        />
        <Carousel.Caption>
        <p className="tituloClases">Reducción del estrés</p>
            <p className="textoClases">
            La danza, puede ser una forma efectiva de liberar el estrés y mejorar el estado de ánimo a través del movimiento y la expresión artística
            </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="src\assets\fondoCarrousel.png"
          alt="Third slide"
        />
        <Carousel.Caption>
        <p className="tituloClases">Fomento de la autoconfianza</p>
            <p className="textoClases">
            La práctica regular de la danza oriental puede ayudar a aumentar la autoestima y la confianza en uno mismo
            </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="src\assets\fondoCarrousel.png"
          alt="Third slide"
        />
        <Carousel.Caption>
        <p className="tituloClases">Socialización</p>
            <p className="textoClases">
            Brinda la oportunidad de conocer a otras personas con intereses similares, lo que puede fomentar la socialización y el establecimiento de nuevas amistades.
            </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </>
  );
};

export default TablonesClases;
