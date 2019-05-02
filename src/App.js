import React, { Component } from "react";
import less_mtn from "./images/camping:bigsur:cimbing/less_mtn.JPG";
import "./App.css";
import PictureContainer from "./containers/PictureContainer";
import { Switch, Route, BrowserRouter, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img className="home-image" src={less_mtn} alt="logo" />
        </header>
        <BrowserRouter>
          <Switch>
            <Route path="/pictures" component={PictureContainer} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
