import React, { Component } from "react";

import PictureContainer from "./PictureContainer";
import Navbar from "../components/Navbar";

class HomeContainer extends Component {
  state = {
    picture: ""
  };

  pictureSelect = () => {
    let picture;
    // grab id from selected picture --> event.targer.id
    // this.setState{picture: this.picture}
  };

  render() {
    return (
      <div id="home-container">
        <Navbar />
        <PictureContainer picture={this.state.picture} />
      </div>
    );
  }
}

export default HomeContainer;
