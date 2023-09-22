import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="izquierdo">
        <span>© 2023 Frank Bedoya Mejia</span>
      </div>
      <div className="derecho">
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
      </div>
    </footer>
  );
};
