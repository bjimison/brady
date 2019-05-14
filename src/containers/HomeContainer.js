import React, { Component } from "react";

import PictureContainer from "./PictureContainer";

class HomeContainer extends Component {
  render() {
    return (
      <div id="home-container">
        <header className="App-header" />
        <PictureContainer />
      </div>
    );
  }
}

export default HomeContainer;
