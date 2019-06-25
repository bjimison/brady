import React, { Component } from "react";
import { BrowserRouter, Route, withRouter } from "react-router-dom";

import less_mtn from "../images/Big_Sur/less_mtn.JPG";
import angry_montara from "../images/Big_Wave_Day/angry_Montara_wall.JPG";
import angry_grey_whale from "../images/Big_Wave_Day/Big_waves_Grey_Whale.JPG";
import ledge from "../images/Big_Wave_Day/looking_over_ledge.JPG";
import mavs from "../images/Big_Wave_Day/Decent_Mavs_Surfer.JPG";
import hmb from "../images/Big_Wave_Day/HMB_Fog.JPG";
import crescent from "../images/Big_Sur/crescent_sunset.JPG";
import people from "../images/Big_Sur/people_BigSur_Clouds.JPG";

import "../styles/pictures.css";

class Pictures extends Component {
  pictureSelect = () => {
    let picture;
    // grab id from selected picture --> event.targer.id
  };

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
            <li>
              <img className="non-show-image" src={mavs} alt="logo" />
              <Route path="/pictures/:picture_id" />
            </li>
            <li>
              <img className="non-show-image" src={hmb} alt="logo" />
              <Route path="/pictures/:picture_id" />
            </li>
            <li>
              <img className="non-show-image" src={crescent} alt="logo" />
              <Route path="/pictures/:picture_id" />
            </li>
            <li>
              <img className="non-show-image" src={people} alt="logo" />
              <Route path="/pictures/:picture_id" />
            </li>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default Pictures;
