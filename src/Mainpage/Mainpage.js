import React from "react";
import MediaCard from "../Components/MediaCard";
import logo from "../images/moon.svg";
import "./Mainpage.css";
import Link from "react-router-hash-link";


class Mainpage extends React.Component {
  render() {
    return (
      <div>
        <div className="intro">
          <img src={logo} className="App-logo" id="path" alt="logo" />
          <p>Expand your dreaming horizons</p>
          <Link smooth to="#mainpage" className="App-link">
            Enter
          </Link>
        </div>
        <div className="sections" id="mainpage">
          <div className="left-media-card">
            <MediaCard
              title={"Article 1"}
              description={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias maiores ipsam illum, obcaecati corrupti modi, eius in laboriosam eos culpa quod exercitationem eum velit earum mollitia tempore hic dicta ex."
              }
            />
          </div>
          <div className="right-media-card">
            <MediaCard
              title={"Article 2"}
              description={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias maiores ipsam illum, obcaecati corrupti modi, eius in laboriosam eos culpa quod exercitationem eum velit earum mollitia tempore hic dicta ex."
              }
            />
          </div>
          <div className="left-media-card">
            <MediaCard
              title={"Article 3"}
              description={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias maiores ipsam illum, obcaecati corrupti modi, eius in laboriosam eos culpa quod exercitationem eum velit earum mollitia tempore hic dicta ex."
              }
            />
          </div>
          <div className="right-media-card">
            <MediaCard
              title={"Article 4"}
              description={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias maiores ipsam illum, obcaecati corrupti modi, eius in laboriosam eos culpa quod exercitationem eum velit earum mollitia tempore hic dicta ex."
              }
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Mainpage;
