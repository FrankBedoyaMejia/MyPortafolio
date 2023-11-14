import React from "react";

export const Habilidades = () => {
  return (
    <>
      <div className="contenedorH">
        <h1>Habilidades</h1>
        <div className="habilidades">
          <div className="front">
            <h3>FrontEnd</h3>
            <ul>
              <li>HTML AND CSS</li>
              <li>JAVASCRIPT</li>
              <li>REACT</li>
            </ul>
          </div>

          <div className="back">
            <h3>BackEnd</h3>
            <ul>
              <li>JAVA</li>
              <li>MYSQL</li>
              <li>API-REST</li>
              <li>SPRING BOOT</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
