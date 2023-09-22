import React from "react";
import { CardProyecto } from "./CardProyecto";
import productos from "../Data/Product.json";

export const ResumenProyectos = () => {
  return (
    <div className="seccion_productos">
      <h1>Algunos de mis proyectos realizados</h1>
      <div className="productos">
        {productos
          ? productos.map((producto) => {
              return <CardProyecto key={producto.title} producto={producto} />;
            })
          : null}
      </div>
    </div>
  );
};
