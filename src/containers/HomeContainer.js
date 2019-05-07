import React, { Component } from "react";
import { Switch, Route, BrowserRouter, Link } from "react-router-dom";

import PictureContainer from "./PictureContainer";
import less_mtn from "../images/camping:bigsur:cimbing/less_mtn.JPG";

class HomeContainer extends Component {
  render() {
    return (
      <div>
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

export default HomeContainer;
