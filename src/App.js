import React, { Component } from "react";
import logo from "./moon.svg";
import "./App.css";
import { HashLink as Link } from "react-router-hash-link";
import { HashRouter } from "react-router-dom";
import Mainpage from "./Mainpage/Mainpage";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <div className="intro">
            <img src={logo} className="App-logo" id="path" alt="logo" />
            <p>
              Welcome to the platform that will help you to expand your dreaming
              horizons
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
