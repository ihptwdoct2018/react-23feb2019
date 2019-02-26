import React, { Component } from "react";

class Descripcion extends Component {
  render() {
    return (
      <h3>
        {this.props.objeto.nombre}
        <br />
        {this.props.objeto.descripcion}
      </h3>
    );
  }
}

export default Descripcion;
