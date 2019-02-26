import React from "react";
import Descripcion from "./Descripcion";
import Titulo from "./Titulo";
import logo from "../logo.svg";

const Header = () => {
  return (
    <header className="App-header">
      <img src={logo} alt="logo" className="App-logo" />
      <Titulo eltitulomaestro="Bienvenidos todos a React, por que IronHackers!!!!!" />
      <Descripcion
        objeto={{ nombre: "Santiago", descripcion: "Viene de rojo" }}
      />
    </header>
  );
};

export default Header;
