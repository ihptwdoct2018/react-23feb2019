import React from "react";

const ImprovedCard = props => {
  let textoPremios;
  if (props.tieneOscar) {
    if (props.IMDBRating >= 9) {
      textoPremios = (
        <p>Ganó OScar y tiene un rating en IMDB de: {props.IMDBRating}</p>
      );
    } else if (props.IMDBRating >= 7) {
      textoPremios = (
        <p>Gano Oscar pero su puntuacion es chafa, de: {props.IMDBRating}</p>
      );
    } else {
      textoPremios = (
        <p>
          Buena peli, sin Oscares y con una calificacion de: {props.IMDBRating}
        </p>
      );
    }
  }
  return (
    <div className="movies-list-item">
      <h2>{props.titulo}</h2>
      <p>Director: {props.director}</p>
      {props.tieneOscar && <p>Tiene un oscar</p>}
      {!props.tieneOscar && (
        <p>No tiene un oscar como DiCaprio antes de Revenant</p>
      )}

      {textoPremios}
      <button onClick={props.clickToDelete}>Borrar</button>
    </div>
  );
};

export default ImprovedCard;
