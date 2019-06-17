import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import "../styles/Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <div id="navbar">
        <li>Pictures</li>
        <i className="fa fa-camera" />
        <li>Videos</li>
      </div>
    );
  }
}

export default Navbar;
