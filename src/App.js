import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import HomeContainer from "./containers/HomeContainer";
import PictureContainer from "./containers/PictureContainer";
import ShowPicture from "./components/ShowPicture";

class App extends Component {
  render() {
    return (
      <div className="App">
        <HomeContainer />
        <BrowserRouter>
          <Switch>
            <Route path="/pictures" component={PictureContainer} />
            <Route
              path="/showpicture/:picture_id"
              render={props => <ShowPicture {...props} />}
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
