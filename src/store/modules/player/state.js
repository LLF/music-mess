/**
 * 单一状态树
 * vuex 操作顺序：state.js -> mutations-type.js -> mutations.js -> getters.js
 */

const PLAY_MODE = {
  SEQUENCE: 0,
  RANDOM: 1,
  LOOP: 2
}

const state = {
  playList: [],
  playMode: PLAY_MODE.SEQUENCE,
  isPlaying: false,
  song: {},
  songList: [],
  volume: 50,
  playingIndex: 0
}

export default state
