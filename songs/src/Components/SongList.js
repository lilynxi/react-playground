import React, {Component} from 'react';
import { connect } from 'react-redux'; ///
import { selectSong } from '../Actions';

class SongList extends Component {
  renderList = () => {
    return this.props.songs.map((song,i) => {
      return (
        <div key={i}>
          <div>{song.title}</div>
          <div onClick={this.onClick = () => this.props.selectSong(song)}>button</div>
        </div>
      )
    })
  }

  render(){
    return (
      <div>{this.renderList()}</div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    songs: state.songs
  };
}

export default connect(mapStateToProps,{
  selectSong
})(SongList);