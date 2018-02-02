// Player Mutations
import * as TYPES from '../../mutation-types'

const mutations = {
  [TYPES.SET_PLAY_LIST] (state, list) {
    state.playList = list
  },
  [TYPES.SET_SONG] (state, song) {
    state.song = song
  },
  [TYPES.SET_PLAY_MODE] (state, mode) {
    state.playMode = mode
  },
  [TYPES.SET_PLAYING_STATUS] (state, isPlaying) {
    state.isPlaying = isPlaying
  },
  [TYPES.SET_SONG_LIST] (state, songList) {
    state.songList = songList
  },
  [TYPES.SET_PLAYING_INDEX] (state, index) {
    state.playingIndex = index
  },
  [TYPES.SET_VOLUME] (state, volume) {
    state.volume = volume
  }
}

export default mutations
