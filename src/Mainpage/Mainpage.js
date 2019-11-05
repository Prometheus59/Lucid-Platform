import React from "react";
import MediaCard from "../Components/MediaCard";
import "./Mainpage.css";

class Mainpage extends React.Component {
  render() {
    return (
      <div id="mainpage">
        <div className="sections">
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
