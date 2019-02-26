import React from "react";
import Card from "./Card";

const numeros = ["uno", "dos", "tres", "cuatro", "cinco", "seis", "siete"];

// export const listaElementos = [
//   <li>1</li>,
//   <li>2</li>,
//   <li>3</li>,
//   <li>4</li>,
//   <li>5</li>
// ];

export const listaElementos = numeros.map((unNumero, index) => (
  <li key={index}>{unNumero}</li>
));

const peliculas = [
  { titulo: "Jurassic World XXV", director: "Señor Spielbergo" },
  { titulo: "Sharknado", director: "Anthony C. Ferrante" },
  {
    titulo: "Lavalantula",
    director: "Supongo que es el mismo señor que Sharknado"
  }
];

export const ListaPeliculas = () => {
  return (
    <ul>
      {peliculas.map((pelicula, index) => (
        <Card
          key={index}
          titulo={pelicula.titulo}
          director={pelicula.director}
        />
      ))}
    </ul>
  );
};
