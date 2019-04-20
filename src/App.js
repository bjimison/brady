import React, { Component } from "react";
// import { Switch, Route } from "react-router-dom";
import looking_over_ledge from "./images/Big_Wave_Day/looking_over_ledge.JPG";
import logo from "./logo.svg";
import "./App.css";
import PictureContainer from "./containers/PictureContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={looking_over_ledge} className="App-logo" alt="logo" />
        </header>
      </div>
    );
  }
}

export default App;
