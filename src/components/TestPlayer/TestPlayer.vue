<template>
  <div class="player-container">
    <div class="player-mini">
      <div class="player-controller">
        <div class="player-controller-button player-controller-prev">
          <i class="icon-previous"></i>
        </div>
        <div class="player-controller-button player-controller-play">
          <i class="icon-play"></i>
        </div>
        <div class="player-controller-button player-controller-next">
          <i class="icon-next"></i>
        </div>
      </div>

      <div class="player-song-info">
        <div class="player-song-avatar">
        </div>
        <div class="player-song-progress">
          <div class="player-song-info-detail">
            <div class="player-song-info-basic">
              <a class="player-song-name">aaaa</a>
              -
              <a class="player-song-singer">bbbb</a>
            </div>
            <span class="player-song-timer">04:00/05:00</span>
          </div>
          <div class="player-song-progress-bar">
            <test-progress-bar></test-progress-bar>
          </div>
        </div>
      </div>

      <div class="player-user-opertion">
        <div class="player-mode">
          <i class="icon-player-mode"></i>
        </div>
        <div class="player-user-like">
          <i class="icon-player-heart"></i>
        </div>
        <div class="player-volume">
          <i class="icon-player-volume"></i>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import TestProgressBar from './TestProgressBar'
export default {
  components: {
    TestProgressBar
  },

  data () {
    return {
      songCanPlay: false,
      // Lyric:
      currentTime: 0,
      currentLyric: null,
      currentLyricLine: 0,
      showList: false
    }
  }
}
</script>

<style lang="scss">
@import "~@/assets/scss/const.scss";

  .player-container {
    display: flex;
    align-items: center;
    position: absolute;
    width: 100%;
    height: 60px;
    bottom: 0;
    left: 0;
    background: $color-background-player;
    .player-mini {
      margin-left: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .player-controller {
      display: flex;
      align-items: center; 
      justify-content: center;
      .player-controller-button {
        flex: 0 1 70px;
        width: 80px;
        height: 50px;
      }
      .player-controller-next, .player-controller-prev {
        font-size: 45px;
      }
      .player-controller-play {
        font-size: 45px;
      }
    }

    .player-song-info {
      .player-song-info-detail {
        display: flex;
        flex: 0 1 auto;
        justify-content: space-between;
      }

      .player-song-progress-bar {
        flex: 1;
      }
    }
  }
</style>
