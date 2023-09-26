import React from "react";

export const CardProyecto = ({ producto }) => {
  return (
    <div class="card">
      <img src={producto.image} alt="imagen" />
      <div class="card__content">
        <p class="card__title">{producto.titulo}</p>
        <p class="card__description">{producto.descripcion}</p>
      </div>
    </div>
  );
};
