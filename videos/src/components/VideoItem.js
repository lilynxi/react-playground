import React, {Component} from 'react';
import './VideoItem.css';

class VideoItem extends Component {

  render(){
    return (
      <div className="video-item item" onClick={() => this.props.selectVideo(this.props.video)}>
        <img alt={this.props.video.snippet.title} src={this.props.video.snippet.thumbnails.medium.url} className="ui image" />
        <div className="content">
          <div className="header">{this.props.video.snippet.title}</div>
        </div>
      </div>
    );
  };
}


export default VideoItem;