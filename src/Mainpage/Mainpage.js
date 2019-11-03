import React from "react";
import "./Mainpage.css";

class Mainpage extends React.Component {
  render() {
    return (
      <div id="mainpage">
        <div className="sections">
          <button className="box">Journal</button>
          <button className="box">Blog</button>
          <button className="box">Previous Entries</button>
          <button className="box">Resources</button>
          <button className="box">Community</button>
        </div>
      </div>
    );
  }
}

export default Mainpage;
