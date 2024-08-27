import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./Box.css";

const Box = () => {

  useEffect(() => {
    AOS.init({
      duration: 3000,
    });
  }, []);

  return (
    <>
    <div className="box">
          <p className="texto-motiv2">
            Danza Okara nació del amor y afán de ayudar a los demás, nos dimos
            cuenta lo que aportaba a nivel psíquico y fisico en las personas y
            es lo que nos impulso a realizar este proyecto.
          </p>
        </div>
        <p className="autor">CONCHI JATO</p>

        <div className="derecha" data-aos="fade-right">
          <p>
            Bienvenido a Danza Okara, tu destino para explorar la belleza y la
            gracia de la danza oriental. Fundada con una pasión por compartir
            esta antigua forma de arte con la comunidad, nuestra escuela se
            enorgullece de ofrecer un ambiente acogedor y enriquecedor donde los
            estudiantes de todas las edades y niveles de habilidad pueden
            descubrir y desarrollar su amor por la danza.
          </p>
          <img
            className="img-class-box"
            alt="Alas de isis doradas y azules"
            src="https://res.cloudinary.com/ddtolhmab/image/upload/v1724696721/alasIsisdoradasyAzules_um0ocf.jpg"
          />
        </div>

        <div className="izq" data-aos="fade-left">
          <img
            className="img-class-box desktop"
            alt="Coreografia de Guerreras"
            src="https://res.cloudinary.com/ddtolhmab/image/upload/v1724696722/guerreras_g7egy8.jpg"
          />
          <p>
            En Danza Okara, creemos en la importancia de preservar las
            tradiciones de la danza oriental mientras abrazamos la innovación y
            la creatividad. Nuestra profesora altamente calificada está
            comprometida a brindar clases de alta calidad que no solo enseñan
            técnicas de danza, sino que también inspiran a los estudiantes a
            expresarse libremente y a conectarse con su propio ser interior a
            través del movimiento.
          </p>
          <img
            className="img-class-box mobile"
            alt="Coreografia de Guerreras"
            src="https://res.cloudinary.com/ddtolhmab/image/upload/v1724696722/guerreras_g7egy8.jpg"
          />
          
        </div>

        <div className="derecha" data-aos="fade-right">
          <p>
            Ofrecemos una amplia gama de oportunidades para que los bailarines
            de todos los niveles exploren y crezcan en su práctica. Nuestro
            enfoque centrado en el estudiante garantiza un ambiente de apoyo
            donde cada individuo puede florecer y alcanzar su máximo potencial
            como bailarín.
          </p>

          <img
            className="img-class-box"
            alt="bailarina con alas de isis de color bronce"
            src="https://res.cloudinary.com/ddtolhmab/image/upload/v1724696720/alasIsis_ynklem.jpg"
          />
        </div>

        <div className="izq" data-aos="fade-left">
          <img
            className="img-class-box desktop"
            alt="madre e hija sonriendo juntas"
            src="https://res.cloudinary.com/ddtolhmab/image/upload/v1724696728/madre-hija_zsm4cz.jpg"
          />
          <p>
            Más que una simple escuela de danza, Danza Okara es una comunidad
            vibrante y diversa de personas apasionadas por la danza oriental.
            Nos enorgullece ofrecer un espacio inclusivo donde se fomenta la
            amistad, la camaradería y el respeto mutuo. Únete a nosotros en
            Danza Okara y descubre el mundo de posibilidades que la danza
            oriental tiene para ofrecer. Ya sea que estés buscando mejorar tu
            técnica, explorar tu creatividad o simplemente sumergirte en la
            belleza de esta antigua forma de arte, estamos aquí para guiarte en
            tu viaje de danza. ¡Esperamos verte pronto en el estudio!
          </p>

          <img
            className="img-class-box mobile"
            alt="madre e hija sonriendo juntas"
            src="https://res.cloudinary.com/ddtolhmab/image/upload/v1724696728/madre-hija_zsm4cz.jpg"
          />
          
        </div>
        </>
  );
};

export default Box;
