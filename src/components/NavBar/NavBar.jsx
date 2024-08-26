import './NavBar.css';
import { Link } from "react-router-dom";
import { useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

function Menu() {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  const handleClose = () => {
    setExpanded(false);
  };

  return (
    <Navbar expanded={expanded} expand="lg">
      <Container className='ancho'>
        <Navbar.Brand href="#home">
          <img
            alt="Logo Danza Okara"
            src="src\assets\LogoDO.png"
            width="100px"
            height="auto"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Brand className='titulo-nav' href="#home">
          <Link to="/" className='link-none'>DANZA OKARA</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleToggle} />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Link to="/clases" className='link-none'>
              <Nav.Link className='texto-nav' href="#link" onClick={handleClose}>Clases</Nav.Link>
            </Link>
            <Link to="/clubamigos" className='link-none'>
              <Nav.Link className='texto-nav' href="#link" onClick={handleClose}>Club Amigos</Nav.Link>
            </Link>
            <Link to="/galeria" className='link-none'>
              <Nav.Link className='texto-nav' href="#link" onClick={handleClose}>Galeria</Nav.Link>
            </Link>
            <Link to="/sobreNosotros" className='link-none'>
              <Nav.Link className='texto-nav' href="#link" onClick={handleClose}>Sobre nosotros</Nav.Link>
            </Link>
            <Link to="/contactanos" className='link-none'>
              <Nav.Link className='texto-nav' href="#link" onClick={handleClose}>Contáctanos</Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;