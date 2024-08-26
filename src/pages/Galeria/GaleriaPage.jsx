import { Helmet } from "react-helmet";
import React, { useState } from "react";
import { Container, Nav } from "react-bootstrap";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "./GaleriaPage.css";
import BannerGaleria from "../../components/BannerGaleria/BannerGaleria";

const GaleriaPage = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const images = [
    { src: "https://res.cloudinary.com/ddtolhmab/image/upload/v1715249223/Danza%20Okara/serpientes/qpib7iggkjyqbbiici7t.jpg", className: "percusion" },
    { src: "https://res.cloudinary.com/ddtolhmab/image/upload/v1715249855/Danza%20Okara/Alas%20de%20isis/j3lkntagfeuf9t3ejazr.jpg", className: "alasdeisis" },
    { src: "https://res.cloudinary.com/ddtolhmab/image/upload/v1715248937/Danza%20Okara/dragon/lnftuwtfhsfbiufggzee.png", className: "cuentos" },
    { src: "https://res.cloudinary.com/ddtolhmab/image/upload/v1715255167/Danza%20Okara/Percusi%C3%B3n/se8erouknmmm2ek0szm7.jpg", className: "percusion" },
    { src: "https://res.cloudinary.com/ddtolhmab/image/upload/v1715255595/Danza%20Okara/club%20amigos/imzmss0dszeecweo0rwl.jpg", className: "clubamigos" },
    { src: "https://res.cloudinary.com/ddtolhmab/image/upload/v1714383268/Danza%20Okara/Conchi%20Jato/rwhdqmiegrsobovbk6cr.jpg", className: "percusion" },
    { src: "https://res.cloudinary.com/ddtolhmab/image/upload/v1715249424/Danza%20Okara/guerreras/anhgccn6kbiaflyhhl3x.jpg", className: "cuentos" },
    { src: "https://res.cloudinary.com/ddtolhmab/image/upload/v1715250055/Danza%20Okara/Velos/yrwpvclgkljm99sxnpjh.jpg", className: "abanicos" },
    { src: "https://res.cloudinary.com/ddtolhmab/image/upload/v1715250246/Danza%20Okara/Velos/i8zlyzt036uv06d702jb.jpg", className: "velo" },
    { src: "https://res.cloudinary.com/ddtolhmab/image/upload/v1715249992/Danza%20Okara/Alas%20de%20isis/zch25wji5l1ea83ovtk0.jpg", className: "alasdeisis" },
  ];

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
    setLightboxOpen(true);
  };

  const filteredImages = selectedCategory === null 
    ? images 
    : images.filter(image => image.className === selectedCategory);

  return (
    <>
      <Helmet>
        <title>Danza Okara - Galería</title>
        <meta name="description" content="Explora nuestra galería de imágenes y vive los momentos más emocionantes de nuestras presentaciones y clases de danza oriental. ¡Inspírate con nuestras fotos!" />
        <meta name="keywords" content="Alcorcón, Madrid, galería de imágenes, fotos de danza oriental, presentaciones de danza, momentos de danza, galería de fotos, inspirarse en la danza" />
      </Helmet>
      <BannerGaleria />
      <Container>
        <div className="wrapper">
          <Nav className="items">
            <Nav.Item>
              <span className="item" onClick={() => setSelectedCategory(null)}>Galería</span>
            </Nav.Item>
            <Nav.Item>
              <span className="item" onClick={() => setSelectedCategory("abanicos")}>Abanicos</span>
            </Nav.Item>
            <Nav.Item>
              <span className="item" onClick={() => setSelectedCategory("alasdeisis")}>Alas de Isis</span>
            </Nav.Item>
            <Nav.Item>
              <span className="item" onClick={() => setSelectedCategory("clubamigos")}>Club Amigos</span>
            </Nav.Item>
            <Nav.Item>
              <span className="item" onClick={() => setSelectedCategory("cuentos")}>Cuentos</span>
            </Nav.Item>
            <Nav.Item>
              <span className="item" onClick={() => setSelectedCategory("percusion")}>Percusión</span>
            </Nav.Item>
            <Nav.Item>
              <span className="item" onClick={() => setSelectedCategory("velo")}>Velos</span>
            </Nav.Item>
          </Nav>
        </div>

        <div className="gallery">
          {filteredImages.map((image, index) => (
            <div className="pic" key={index} onClick={() => handleImageClick(index)}>
              <img src={image.src} alt={`Galería ${index}`} />
            </div>
          ))}
        </div>

        {lightboxOpen && (
          <Lightbox
            open={lightboxOpen}
            index={selectedImageIndex}
            close={() => setLightboxOpen(false)}
            slides={filteredImages.map(image => ({ src: image.src }))}
          />
        )}
      </Container>
    </>
  );
};

export default GaleriaPage;
