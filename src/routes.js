import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/navbar";
import MainPage from "./pages/main";

class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route path="/" component={MainPage} exact />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default Routes;
