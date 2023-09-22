import React from "react";
import {
  FaLinkedinIn,
  FaInstagram,
  FaHouse,
  FaFacebook,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header>
        <Link to="/home   ">
          <FaHouse className="iconcasa" />
        </Link>
        <nav className="contenedor">
          <Link to="/sobremi" className="contenedor-lista">
            Sobre mi
          </Link>

          <Link to="/proyectos" className="contenedor-lista">
            Proyectos
          </Link>

          <Link to="/contacto" className="contenedor-lista">
            Contacto
          </Link>
        </nav>
        <div className="icons">
          <FaLinkedinIn className="icon" />
          <FaInstagram className="icon" />
          <FaFacebook className="icon" />
        </div>
      </header>
    </>
  );
}

export default Header;
