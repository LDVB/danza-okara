import "./ContactCards.css";
import Card from "react-bootstrap/Card";
const ContactCards = () => {
  return (
    <>
      <div class="cards">
        <div class="card card-1">
          <div class="card__icon">
            <img
              alt="Logo Danza Okara"
              src="src\assets\alfiler.png"
              width="50px"
              height="auto"
            />
          </div>
          <h2 class="card__title">Dirección</h2>

          <p class="card__apply"> C. Navales, 49, 28925 Alcorcón</p>
        </div>
        <div class="card card-1">
          <div class="card__icon">
            <img
              alt="Logo Danza Okara"
              src="src\assets\reloj-de-pared.png"
              width="50px"
              height="auto"
            />
          </div>
          <h2 class="card__title">Horario</h2>
          <p class="card__apply">
            Lunes a Viernes: <br />
            09:00 - 21:00
          </p>
        </div>
        <div class="card card-1">
          <div class="card__icon">
            <img
              alt="Logo Danza Okara"
              src="src\assets\correo-electronico.png"
              width="50px"
              height="auto"
            />
          </div><br></br>
          <h2 class="card__title">Email</h2>
          <a href="mailto:danzaokara@gmail.com">
            <p class="card__apply">danzaokara@gmail.com</p>
          </a>
        </div>
        <div class="card card-1">
          <div class="card__icon">
            <img
              alt="Logo Danza Okara"
              src="src\assets\telefono-inteligente.png"
              width="50px"
              height="auto"
            />
          </div>
          <p class="card__exit"></p>
          <h2 class="card__title">Teléfono</h2>
          <a href="tel:+34628683885">
            <p class="card__apply"> 628 68 38 85</p>
          </a>
        </div>
      </div>
    </>
  );
};

export default ContactCards;
