import React, { Component } from "react";
import Big_Sur from "./images/camping:bigsur:cimbing/people_BigSur_Clouds.JPG";
import above_the_clouds from "./images/camping:bigsur:cimbing/above_the_clouds.JPG";
import less_mtn from "./images/camping:bigsur:cimbing/less_mtn.JPG";
import naked_trees from "./images/camping:bigsur:cimbing/naked_trees.JPG";
import logo from "./logo.svg";
import "./App.css";
import PictureContainer from "./containers/PictureContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img id="home-image" src={Big_Sur} alt="logo" />
          <img id="home-image" src={above_the_clouds} alt="logo" />
          <img id="home-image" src={less_mtn} alt="logo" />
          <img id="home-image" src={naked_trees} alt="logo" />
        </header>
      </div>
    );
  }
}

export default App;
