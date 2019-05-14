import React, { Component } from "react";
import Pictures from "../components/Pictures";

import "../styles/picturecontainer.css";

class PictureContainer extends Component {
  render() {
    return (
      <div id="picture-container">
        <Pictures />
      </div>
    );
  }
}

export default PictureContainer;
