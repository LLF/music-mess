// Player getters
const getters = {
  getPlayMode: state => state.playMode,
  getPlayStatus: state => state.isPlaying,
  getShowStatus: state => state.isShowing,
  getPlayList: state => state.playList,
  getSong: state => state.song,
  getSongList: state => state.songList,
  getVolume: state => state.volume,
  getPlayingIndex: state => state.playingIndex
}

export default getters
