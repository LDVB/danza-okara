import { Helmet } from "react-helmet";
import React, { useState } from "react";
import { Container, Nav } from "react-bootstrap";
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import "./GaleriaPage.css";
import BannerGaleria from "../../components/BannerGaleria/BannerGaleria";

const GaleriaPage = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

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

  const filteredImages = selectedItem === null ? images : images.filter((image) => image.className === selectedItem);

  return (
    <>
    <Helmet>
        <title>Danza Okara - galeria</title>
        <meta name="description" content="Explora nuestra galería de imágenes y vive los momentos más emocionantes de nuestras presentaciones y clases de danza oriental. ¡Inspírate con nuestras fotos!" />
        <meta name="keywords" content="Alcorcón, Madrid, galería de imágenes, fotos de danza oriental, presentaciones de danza, momentos de danza, galería de fotos, inspirarse en la danza" />
      </Helmet>
      <BannerGaleria />
      <Container>
        <div className="wrapper">
          <Nav className="items">
            <Nav.Item>
              <span className="item" onClick={() => handleItemClick(null)}>Galeria</span>
            </Nav.Item>
            <Nav.Item>
              <span className="item" onClick={() => handleItemClick("abanicos")}>Abanicos</span>
            </Nav.Item>
            <Nav.Item>
              <span className="item" onClick={() => handleItemClick("alasdeisis")}>Alas de Isis</span>
            </Nav.Item>
            <Nav.Item>
              <span className="item" onClick={() => handleItemClick("clubamigos")}>Club amigos</span>
            </Nav.Item>
            <Nav.Item>
              <span className="item" onClick={() => handleItemClick("cuentos")}>Cuentos</span>
            </Nav.Item>
            <Nav.Item>
              <span className="item" onClick={() => handleItemClick("percusion")}>Percusión</span>
            </Nav.Item>
            <Nav.Item>
              <span className="item" onClick={() => handleItemClick("velo")}>Velos</span>
            </Nav.Item>
          </Nav>
        </div>

        <div className="gallery">
          {filteredImages.map((image, index) => (
            <div className="pic" key={image.src} onClick={() => { setPhotoIndex(index); setIsOpen(true); }}>
              <span>
                <img src={image.src} alt="" />
              </span>
            </div>
          ))}
        </div>

        {isOpen && (
          <Lightbox
            mainSrc={filteredImages[photoIndex].src}
            nextSrc={filteredImages[(photoIndex + 1) % filteredImages.length].src}
            prevSrc={filteredImages[(photoIndex + filteredImages.length - 1) % filteredImages.length].src}
            onCloseRequest={() => setIsOpen(false)}
            onMovePrevRequest={() => setPhotoIndex((photoIndex + filteredImages.length - 1) % filteredImages.length)}
            onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % filteredImages.length)}
          />
        )}
      </Container>
    </>
  );
};

export default GaleriaPage;