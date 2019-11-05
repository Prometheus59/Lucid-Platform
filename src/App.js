import React, { Component } from "react";
import logo from "./images/moon.svg";
import "./App.css";
import { HashLink as Link } from "react-router-hash-link";
import { HashRouter } from "react-router-dom";
import Mainpage from "./Mainpage/Mainpage";
import Navigation from "./Components/Navigation.js";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <Navigation />
          <div className="intro">
            <img src={logo} className="App-logo" id="path" alt="logo" />
            <p>
              Expand your dreaming horizons
            </p>
            <Link smooth to="#mainpage" className="App-link">
              Enter
            </Link>
          </div>
          <Mainpage />
          <footer />
        </div>
      </HashRouter>
    );
  }
}

export default App;
