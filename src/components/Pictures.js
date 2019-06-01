import React, { Component } from "react";
import { BrowserRouter, Route, withRouter } from "react-router-dom";

import less_mtn from "../images/camping:bigsur:cimbing/less_mtn.JPG";
import angry_montara from "../images/Big_Wave_Day/angry_Montara_wall.JPG";
import angry_grey_whale from "../images/Big_Wave_Day/Big_waves_Grey_Whale.JPG";
import ledge from "../images/Big_Wave_Day/looking_over_ledge.JPG";
import "../styles/pictures.css";

class Pictures extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div id="pictures-home">
            <li>
              <img className="non-show-image" src={less_mtn} alt="logo" />
              <Route path="/pictures/:picture_id" />
            </li>
            <li>
              <img className="non-show-image" src={angry_montara} alt="logo" />
              <Route path="/pictures/:picture_id" />
            </li>
            <li>
              <img
                className="non-show-image"
                src={angry_grey_whale}
                alt="logo"
              />
              <Route path="/pictures/:picture_id" />
            </li>
            <li>
              <img className="non-show-image" src={ledge} alt="logo" />
              <Route path="/pictures/:picture_id" />
            </li>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default Pictures;
