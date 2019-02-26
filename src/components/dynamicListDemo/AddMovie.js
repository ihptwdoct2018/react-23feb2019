import React, { Component } from "react";

class AddMovie extends Component {
  state = {
    titulo: "",
    director: "",
    tieneOscar: false,
    IMDBRating: ""
  };
  //   handleTituloInput = event => {
  //     this.setState({
  //       titulo: event.target.value
  //     });
  //   };
  //   handleDirectorInput = event => {
  //     this.setState({
  //       director: event.target.value
  //     });
  //   };
  //   handletienOscarInput = event => {
  //     this.setState({
  //       tieneOscar:
  //         event.target.type === "checkbox"
  //           ? event.target.checked
  //           : event.target.value
  //     });
  //   };
  //   handleIMDBRating = event => {
  //     this.setState({
  //       IMDBRating: event.target.value
  //     });
  //   };
  handleChange(event) {
    let { name, value } = event.target;
    if (name === "tieneOscar" && value === "on") {
      value = true;
    }
    this.setState({ [name]: value });
  }
  handleFormSubmit = event => {
    event.preventDefault();
    this.props.addTheMovie(this.state);
    this.setState({
      titulo: "",
      director: "",
      tieneOscar: false,
      IMDBRating: ""
    });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <label htmlFor="titulo">Titulo:</label>
          <input
            type="text"
            name="titulo"
            value={this.state.titulo}
            onChange={e => this.handleChange(e)}
          />
          <label htmlFor="director">Director:</label>
          <input
            type="text"
            name="director"
            value={this.state.director}
            onChange={e => this.handleChange(e)}
          />
          <label htmlFor="tieneOscar">Ganó un Oscar:</label>
          <input
            type="checkbox"
            name="tieneOscar"
            checked={this.state.tieneOscar}
            onChange={e => this.handleChange(e)}
          />
          <label htmlFor="IMDBRating">IMDB Rating:</label>
          <input
            type="text"
            name="IMBDRating"
            value={this.state.IMDBRating}
            onChange={e => this.handleChange(e)}
          />
          <input type="submit" value="Enviar" />
        </form>
      </div>
    );
  }
}

export default AddMovie;
