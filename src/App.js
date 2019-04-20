import React, { Component } from "react";
import Big_Sur from "./images/camping:bigsur:cimbing/people_BigSur_Clouds.JPG";
import logo from "./logo.svg";
import "./App.css";
import PictureContainer from "./containers/PictureContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img id="home-image" src={Big_Sur} alt="logo" />
        </header>
      </div>
    );
  }
}

export default App;
