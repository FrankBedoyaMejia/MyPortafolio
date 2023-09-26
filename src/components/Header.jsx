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
          <a
            href="https://www.linkedin.com/in/frank-bedoya-mejia-105b67249/"
            target="_blank"
          >
            {" "}
            <FaLinkedinIn className="iconlinkedin" />
          </a>
          <a href="https://www.instagram.com/frankcho_/" target="_blank">
            <FaInstagram className="iconinstagram" />
          </a>
          <a href="https://www.facebook.com/frank.bedoya.908/" target="_blank">
            <FaFacebook className="iconfacebook" />
          </a>
        </div>
      </header>
    </>
  );
}

export default Header;
