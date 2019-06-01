import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import "../styles/Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <div id="navbar">
        <li>Pictures</li>
        <li>Videos</li>
      </div>
    );
  }
}

export default Navbar;
