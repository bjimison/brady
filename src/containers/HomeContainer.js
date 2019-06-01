import React, { Component } from "react";

import PictureContainer from "./PictureContainer";
import Navbar from "../components/Navbar";

class HomeContainer extends Component {
  render() {
    return (
      <div id="home-container">
        <Navbar />
        <PictureContainer />
      </div>
    );
  }
}

export default HomeContainer;
