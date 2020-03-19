import React from "react";
import MediaCard from "../Components/MediaCard";

class News extends React.Component {
  render() {
    return (
      <div>
        <h2>Lucid Dreaming News</h2>
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

export default News;