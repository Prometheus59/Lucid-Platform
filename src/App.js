import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Mainpage from "./Mainpage/Mainpage";
import Navigation from "./Components/Navigation.js";
import News from "./News/News";
import Resources from "./Resources/Resources";
import Community from "./Community/Community";
import Journal from "./JournalPage/JournalPage";

class App extends Component {
  componentDidMount() {
    var x = document.getElementById("init");
    //x.innerHTML = <Mainpage />
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Navigation />
          <div id="init">
          </div>
          <Switch>
            <Route path="/welcome">
              <Mainpage />
            </Route>
            <Route path="/journal">
              <Journal />
            </Route>
            <Route path="/news">
              <News />
            </Route>
            <Route path="/resources">
              <Resources />
            </Route>
            <Route path="/community">
              <Community />
            </Route>
          </Switch>
          <footer />
        </div>
      </Router>
    );
  }
}

export default App;
