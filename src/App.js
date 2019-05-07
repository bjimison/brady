import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import HomeContainer from "./containers/HomeContainer";
import PictureContainer from "./containers/PictureContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <HomeContainer />
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
