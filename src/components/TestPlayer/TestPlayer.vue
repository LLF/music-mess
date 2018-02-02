<template>
  <div class="player-container">
    <div class="player-mini">
      <div class="player-controller">
        <div class="player-controller-button player-controller-prev">
          <i 
            class="icon-previous"
            @click="onButtonPrev"
          ></i>
        </div>
        <div class="player-controller-button player-controller-play">
          <i 
            :class="getPlayStatus ? 'icon-pause' : 'icon-play'"
            @click="onButtonPlay"
          ></i>
        </div>
        <div class="player-controller-button player-controller-next">
          <i 
            class="icon-next"
            @click="onButtonNext"
        ></i>
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
            <test-progress-bar
              :bWidth="300"
              :bHeight="10"
            ></test-progress-bar>
          </div>
        </div>
      </div>

      <div class="player-user-operation">
        <div class="player-mode">
          <i class="icon-loop"></i>
        </div>
        <div class="player-user-like">
          <i class="icon-heart"></i>
        </div>
        <div class="player-volume">
          <div class="player-volume-switch">
            <i class="icon-volume"></i>
          </div>
          <div 
            class="player-volume-progress"
            ref="volumeBar"
          >
            <div class="player-volume-progress-background">
              <div class="player-volume-progress-played"></div>
              <div 
                class="player-volume-progress-point"
                ref="volumePoint"
              ></div>
            </div>
          </div>
        </div>
      </div>

    </div>
    <!-- 播放器 -->
    <audio 
      ref="audioRef"
      @play="audioCanPlay"
      @error="audioError"
      @timeupdate="audioTimeupdate"
      @ended="audioEnded">
    </audio>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'
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
      showList: false,
      volume: 0
    }
  },
  
  watch: {
    getPlayStatus(newVal) {
      console.log(newVal)
    }
  },

  computed: {
    ...mapGetters('player', ['getPlayStatus', 'getPlayMode', 'getShowStatus', 'getPlayList', 'getSong', 'getSongList', 'getVolume', 'getPlayingIndex']), 

    ...mapGetters('user', ['getFavoriteList', 'getPlayedHistory', 'getSearchHistory']), 

    buttonPlayClass () {
      return 
    }
  },
  
  methods: {
    onButtonPrev () {

    },

    onButtonPlay () {
      this.setPlayingStatus(!this.getPlayStatus)
    },

    onButtonNext () {

    },

    ...mapMutations('player', {
      setfullScreen: 'SET_FULL_SCREEN',
      setPlayingStatus: 'SET_PLAYING_STATUS',
      setPlayingIndex: 'SET_PLAYING_INDEX',
      setPlayMode: 'SET_PLAY_MODE',
      setPlayList: 'SET_PLAYLIST'
    }),

    // audio api
    audioCanPlay() {
      return
    },

    audioError() {
      return
    },
    audioEnded() {
      return
    },
    audioTimeupdate() {
      return
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
      display: flex;
      align-items: center; 
      justify-content: space-between; 
      width: 360px;

      .player-song-avatar {
        height: 50px;
        width: 50px;
      }

      .player-song-info-detail {
        display: flex;
        flex: 0 1 auto;
        justify-content: space-between;
      }

      .player-song-progress-bar {
        flex: 1;
      }
    }

    .player-user-operation {
      display: flex;
      font-size: 35px;
      align-items: center; 
      justify-content: center;
      .player-mode, .player-user-like{
        width: 60px;
        flex: 0 1 70px;
      }

      .player-volume {
        width: 150px;
        display: flex;
        justify-content: space-between;
        align-items: center; 
        flex: 0 1 70px;

        .player-volume-progress {
          height: 4px;
          width: 80px;
          border-radius: 2px;
          background: $color-background-d;

          .player-volume-progress-point {
            position: relative;
            top: -2px;
            left: -2px;
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background: rgb(71, 46, 46);
          }
        }
      }
    }
  }
</style>
