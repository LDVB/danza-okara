import { Button, Carousel } from "react-bootstrap";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <Button className="boton" href="/contactanos">
        ¡Apuntate!
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
      <Carousel data-bs-theme="dark" className="carrousel">
        <Carousel.Item>
          <img
            className="d-block carousel-Hero-Img"
            src="https://res.cloudinary.com/ddtolhmab/image/upload/v1719072236/Danza%20Okara/WhatsApp_Image_2024-05-31_at_11.06.26_hbcfun.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block carousel-Hero-Img "
            src="https://res.cloudinary.com/ddtolhmab/image/upload/v1717146539/Danza%20Okara/yxc43ablv4r3atm3fooc.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block carousel-Hero-Img"
            src="https://res.cloudinary.com/ddtolhmab/image/upload/v1717146528/Danza%20Okara/prey2qfw3owqptusukbg.jpg"
            alt="Third slide"
          />
        </Carousel.Item>    
      </Carousel>
    </div>
  );
};

export default Hero;

