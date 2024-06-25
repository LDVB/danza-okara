import "./BannerNosotros.css";

const BannerNosotros = () => {
  return (
    <div className="BannerNosotros">
      <img
        className="img-BannerNosotros"
        alt="Puesta en escena coreografia"
        src="src\assets\nosotrosBanner.jpg"
      />
      <div class="texto-superpuesto-BannerNosotros">
        <p className="titulo-BannerNosotros">Sobre nosotros</p>  
      </div>
    </div>
  );
};

export default BannerNosotros;
