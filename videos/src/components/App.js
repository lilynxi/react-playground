import React, {Component} from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import youtube from '../apis/youtube'



class App extends Component {
  state = { videos : [], selectedVideo : null, };

  componentDidMount = () => {
    this.searchForVideo('trees');
  }

  searchForVideo = async (term) => {
    const response = await youtube.get('/search', {
      params: {
        q: term,
      }
    });

    this.setState(
      { videos: response.data.items, selectedVideo : response.data.items[0],  }
    );
  };

  selectTheVideo = (video) => {
    this.setState({selectedVideo: video, });
  }

  render(){
    return (
      <div className="ui container">
        <SearchBar searchVideo={this.searchForVideo} />
        {this.state.selectedVideo && <VideoDetail selectedVideo={this.state.selectedVideo} />}
        {this.state.videos.length > 0 && <VideoList videos={this.state.videos} selectVideo={this.selectTheVideo} />}
       </div>
    );
  }
}

export default App;