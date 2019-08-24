import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/navbar";
import MainPage from "./pages/main";
import CountryDetail from "./pages/countryDetail";

class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route path="/" component={MainPage} exact />
            <Route path="/country/:alpha" component={CountryDetail} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default Routes;
