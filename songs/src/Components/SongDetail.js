import React from 'react';
import { connect } from 'react-redux';

const SongDetail = (props) => {
  return(
    <div>
      {props.song && <div>{props.song.title}</div>}
      {props.song ? <div>{props.song.title}</div> : <div>asdf</div>}
    </div>
  );
}

const mapStateToProps = (state) => {
  return { song: state.selectedSong }
}

export default connect(mapStateToProps)(SongDetail);