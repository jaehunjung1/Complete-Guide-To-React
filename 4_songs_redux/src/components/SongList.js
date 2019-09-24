import React, {Component} from 'react';
import {connect} from 'react-redux';

import {selectSong} from '../actions'

class SongList extends Component {
  renderList() {
    return this.props.songs.map((song) => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button
              className="ui button primary"
              onClick={() => this.props.selectSong(song)}>
              Select
            </button>
          </div>
          <div className="content">
            {song.title}
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="ui divided list">
        {this.renderList()}
      </div>
    );
  }
}

// songs(SongList.prop에서 쓸 이름) : state.songs(Store에 선언된 reducer 이름)
// 이렇게 선언된 mapStateToProps를 connect로 wrap하면 알아서 props.song에 reducer가 처리해준 state들이 업데이트 됨.
const mapStateToProps = (state) => {
  return {
    songs: state.songs
  };
};

// connect: mapStateToProps(전체 reducer store에서 내가 무엇을 받을 건지), selectSong(내가 쓰고자 하는 action creator 이름)
// 여기 등록된 것들은 SongList.prop, 즉 component.prop으로 reference 할 수 있게 됨.
export default connect(mapStateToProps, {
  selectSong // same as selectSong: selectSong
})(SongList);