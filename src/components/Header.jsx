import React from "react";
import {
  FaLinkedinIn,
  FaInstagram,
  FaHouse,
  FaFacebook,
} from "react-icons/fa6";
import { Outlet, Link } from "react-router-dom";

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

          <Link className="contenedor-lista">Proyectos</Link>

          <Link className="contenedor-lista">Contacto</Link>
        </nav>
        <div className="icons">
          <FaLinkedinIn className="icon" />
          <FaInstagram className="icon" />
          <FaFacebook className="icon" />
        </div>
      </header>
      <Outlet />
    </>
  );
}

export default Header;
