import React from "react";
import Routes from "./routes";
import "./App.scss";
import "./pintsize.scss";
import { useCountriesContext } from "./countriesContext";

function App() {
  return (
    <useCountriesContext.Provider>
      <Routes />
    </useCountriesContext.Provider>
  );
}

export default App;
