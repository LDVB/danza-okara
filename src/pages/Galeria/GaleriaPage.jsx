import { Helmet } from "react-helmet";
import React, { useState } from "react";
import { Container, Nav } from "react-bootstrap";
import Gallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import "./GaleriaPage.css";
import BannerGaleria from "../../components/BannerGaleria/BannerGaleria";

const GaleriaPage = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const images = [
    { original: "https://res.cloudinary.com/ddtolhmab/image/upload/v1715249223/Danza%20Okara/serpientes/qpib7iggkjyqbbiici7t.jpg", thumbnail: "https://res.cloudinary.com/ddtolhmab/image/upload/v1715249223/Danza%20Okara/serpientes/qpib7iggkjyqbbiici7t.jpg", className: "percusion" },
    { original: "https://res.cloudinary.com/ddtolhmab/image/upload/v1715249855/Danza%20Okara/Alas%20de%20isis/j3lkntagfeuf9t3ejazr.jpg", thumbnail: "https://res.cloudinary.com/ddtolhmab/image/upload/v1715249855/Danza%20Okara/Alas%20de%20isis/j3lkntagfeuf9t3ejazr.jpg", className: "alasdeisis" },
    { original: "https://res.cloudinary.com/ddtolhmab/image/upload/v1715248937/Danza%20Okara/dragon/lnftuwtfhsfbiufggzee.png", thumbnail: "https://res.cloudinary.com/ddtolhmab/image/upload/v1715248937/Danza%20Okara/dragon/lnftuwtfhsfbiufggzee.png", className: "cuentos" },
    { original: "https://res.cloudinary.com/ddtolhmab/image/upload/v1715255167/Danza%20Okara/Percusi%C3%B3n/se8erouknmmm2ek0szm7.jpg", thumbnail: "https://res.cloudinary.com/ddtolhmab/image/upload/v1715255167/Danza%20Okara/Percusi%C3%B3n/se8erouknmmm2ek0szm7.jpg", className: "percusion" },
    { original: "https://res.cloudinary.com/ddtolhmab/image/upload/v1715255595/Danza%20Okara/club%20amigos/imzmss0dszeecweo0rwl.jpg", thumbnail: "https://res.cloudinary.com/ddtolhmab/image/upload/v1715255595/Danza%20Okara/club%20amigos/imzmss0dszeecweo0rwl.jpg", className: "clubamigos" },
    { original: "https://res.cloudinary.com/ddtolhmab/image/upload/v1714383268/Danza%20Okara/Conchi%20Jato/rwhdqmiegrsobovbk6cr.jpg", thumbnail: "https://res.cloudinary.com/ddtolhmab/image/upload/v1714383268/Danza%20Okara/Conchi%20Jato/rwhdqmiegrsobovbk6cr.jpg", className: "percusion" },
    { original: "https://res.cloudinary.com/ddtolhmab/image/upload/v1715249424/Danza%20Okara/guerreras/anhgccn6kbiaflyhhl3x.jpg", thumbnail: "https://res.cloudinary.com/ddtolhmab/image/upload/v1715249424/Danza%20Okara/guerreras/anhgccn6kbiaflyhhl3x.jpg", className: "cuentos" },
    { original: "https://res.cloudinary.com/ddtolhmab/image/upload/v1715250055/Danza%20Okara/Velos/yrwpvclgkljm99sxnpjh.jpg", thumbnail: "https://res.cloudinary.com/ddtolhmab/image/upload/v1715250055/Danza%20Okara/Velos/yrwpvclgkljm99sxnpjh.jpg", className: "abanicos" },
    { original: "https://res.cloudinary.com/ddtolhmab/image/upload/v1715250246/Danza%20Okara/Velos/i8zlyzt036uv06d702jb.jpg", thumbnail: "https://res.cloudinary.com/ddtolhmab/image/upload/v1715250246/Danza%20Okara/Velos/i8zlyzt036uv06d702jb.jpg", className: "velo" },
    { original: "https://res.cloudinary.com/ddtolhmab/image/upload/v1715249992/Danza%20Okara/Alas%20de%20isis/zch25wji5l1ea83ovtk0.jpg", thumbnail: "https://res.cloudinary.com/ddtolhmab/image/upload/v1715249992/Danza%20Okara/Alas%20de%20isis/zch25wji5l1ea83ovtk0.jpg", className: "alasdeisis" },
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
          <Gallery
            items={filteredImages}
            showThumbnails={false}
            showBullets={true}
            showNav={true}
            showPlayButton={false}
          />
        </div>
      </Container>
    </>
  );
};

export default GaleriaPage;
