import React, { Component } from "react";
import Header from "./components/Header";
import { listaElementos, ListaPeliculas } from "./components/ListDemo";
import DynamicMoviesList from "./components/dynamicListDemo/DynamicmoviesList";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <ul>{listaElementos}</ul>
        <div>
          <ListaPeliculas />
        </div>

        <hr />
        <DynamicMoviesList />
      </div>
    );
  }
}

export default App;
