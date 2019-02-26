import React, { Component } from "react";
import ImprovedCard from "./ImprovedCard";
import AddMovie from "./AddMovie";

class DynamicMoviesList extends Component {
  constructor() {
    super();
    this.state = {
      peliculas: [
        {
          titulo: "Momo",
          director: "Pao",
          tieneOscar: true,
          IMDBRating: 9.2
        },
        {
          titulo: "EstarGuars",
          director: "El charolastra",
          tieneOscar: true,
          IMDBRating: 8.7
        },
        {
          titulo: "Pesadilla en la calle de Tonalá",
          director: "IronHack",
          tieneOscar: false,
          IMDBRating: 9.3
        }
      ],
      mostrarConOscar: false
    };
  }

  toggleOscar = () => {
    this.setState(prev => ({
      mostrarConOscar: !prev.mostrarConOscar
    }));
  };

  deleteMovieHandler = indice => {
    const copiaPelis = this.state.peliculas;
    copiaPelis.splice(indice, 1);
    this.setState({
      peliculas: copiaPelis
    });
  };

  addMovieHandler = laPeli => {
    const movieCopy = [...this.state.peliculas];
    movieCopy.push(laPeli);
    this.setState({
      peliculas: movieCopy
    });
  };
  peliculasFiltradas;

  render() {
    console.log(this.state.peliculas);
    const { mostrarConOscar } = this.state;
    this.peliculasFiltradas = this.state.peliculas.filter(
      laPeli => laPeli.tieneOscar === mostrarConOscar
    );
    return (
      <div>
        <AddMovie addTheMovie={this.addMovieHandler} />
        {this.peliculasFiltradas.map((lapelicula, index) => {
          return (
            <ImprovedCard
              key={index}
              {...lapelicula}
              clickToDelete={() => this.deleteMovieHandler(index)}
            />
          );
        })}
        <button onClick={() => this.toggleOscar()}>
          {mostrarConOscar ? "Oculta las ganadoras" : "Oculta las perdedoras"}
        </button>
      </div>
    );
  }
}

export default DynamicMoviesList;
