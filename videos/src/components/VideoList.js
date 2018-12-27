import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({videos, selectVideo}) => {
  //console.log(videos.shift());
  //const firstVideo = videos.shift();
  const renderedList = videos.length > 0 ? videos.map(video => <VideoItem video={video} key={video.etag} selectVideo={selectVideo} />) : <div>no results found</div>

  return (
    <div>
      {renderedList}
    </div>
  );
}

export default VideoList;