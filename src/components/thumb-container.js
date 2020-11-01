import React from "react";
import VideoThumbnail from "./video-thumbnail";

export function ThumbContainer(props) {
  const listItems = props.images.map((element,index) =>
        <VideoThumbnail key={index.toString()} image={element} >
        
        </VideoThumbnail>
    );
  return (<div className="thumb-container">
            {listItems}
          </div>);
}
