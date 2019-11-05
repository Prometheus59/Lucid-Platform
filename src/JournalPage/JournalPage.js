import React from "react";
import MediaCard from "../Components/MediaCard";

class JournalPage extends React.Component {
  render() {
    return (
      <div>
        <h2>Dream Journal</h2>
        <button>New Journal Entry</button>
        <div className="prev-entries">
          <button>See all</button>
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
