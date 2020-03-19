import React from "react";
import MediaCard from "../Components/MediaCard";

class Resources extends React.Component {
  render() {
    return (
      <div>
        <h2>Lucid Dreaming Resources</h2>
        <div>
          <MediaCard title="Sample Title" description="sample desc" />
          <MediaCard title="Sample Title" description="sample desc" />
          <MediaCard title="Sample Title" description="sample desc" />
          <MediaCard title="Sample Title" description="sample desc" />
          <MediaCard title="Sample Title" description="sample desc" />
          
        </div>
      </div>
    );
  }
}

export default Resources;