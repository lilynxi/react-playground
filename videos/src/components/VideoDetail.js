import React from 'react';

const VideoDetail = ({selectedVideo}) => {

  const videoSrc = `https://www.youtube.com/embed/${selectedVideo.id.videoId}`;

  return (
    <div>
      <iframe title="video-title" src={videoSrc} />
      <div>{selectedVideo.snippet.title}</div>
    </div>
  )
}

export default VideoDetail;