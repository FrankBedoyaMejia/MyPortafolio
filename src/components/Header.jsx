import React from "react";
import {
  FaLinkedinIn,
  FaInstagram,
  FaHouse,
  FaFacebook,
} from "react-icons/fa6";

function Header() {
  return (
    <header>
      <FaHouse className="icon" />
      <nav className="contenedor">
        <li className="contenedor-lista">Sobre mi</li>
        <li className="contenedor-lista">Proyectos</li>
        <li className="contenedor-lista">Contacto</li>
      </nav>
      <div className="icons">
        <FaLinkedinIn className="icon" />
        <FaInstagram className="icon" />
        <FaFacebook className="icon" />
      </div>
    </header>
  );
}

export default Header;
