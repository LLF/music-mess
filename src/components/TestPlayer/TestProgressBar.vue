<template>
  <div 
    class="player-progress-bar"
    ref="progressBar" 
    @click.stop="progressClick"
  >
    <div class="player-progress-bar-background">
      <div ref="progressDownloaded" class="player-progress-bar-downloaded">
      </div>
      <div ref="progressPlayed" class="player-progress-bar-played">
      </div>
      <div 
        ref="progressPoint" 
        class="player-progress-point-wrapper"
        @mousedown="progressPointStart"
        @mousemove="progressPointMove"
        @mouseup="progressPointEnd"
      >
        <div class="player-progress-point"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      startFlag: false,
      startX: 0
    }
  },
  methods: {
    progressClick (event) {
      let rectLeft = this.$refs.progressBar.getBoundingClientRect().left
      let offsetWidth = event.pageX - rectLeft
      this._movePoint(offsetWidth)
    },

    progressPointStart (event) {
      this.startFlag = true
      this.startX = event.pageX
    },

    progressPointMove (event) {
      if (!this.startFlag) return
      let offsetWidth = event.pageX - this.startX
      let offset = Math.min(this.$refs.progressBar.clientWidth, Math.max(0, offsetWidth))
      console.log(offsetWidth)
      this._movePoint(offset)
    },

    progressPointEnd (event) {
      this.startFlag = false
    },

    _movePoint (width) {
      this.$refs.progressPoint.style['transform'] = `translate3d(${width}px, 0, 0)`
      this.$refs.progressPoint.style['webkitTransform'] = `translate3d(${width}px, 0, 0)`
      this.$refs.progressPlayed.style.width = `${width}px`
    }

  }
}
</script>

<style lang="scss">
@import '~@/assets/scss/const.scss';

.player-progress-bar {
  height: 30px;

  .player-progress-bar-background {
    position: relative;
    top: 10px;
    height: 8px;
    width: 300px;
    border-radius: 5px;
    background: $color-background-d;

    .player-progress-bar-downloaded {
      height: 100%;
      border-radius: 5px;
      background: rgba(182, 163, 126, 0.438);
    }
    
    .player-progress-bar-played { 
      position: absolute;
      top: 0px;
      border-radius: 5px;
      height: 100%;
      background: rgb(253, 127, 127); 
    }

    .player-progress-point-wrapper {
      top: -11px;
      left: -15px;
      position: absolute;
      width: 30px;
      height: 30px;

      .player-progress-point {
        position: relative;
        left: 4px;
        top: 4px;
        width: 16px;
        height: 16px;
        border: 3px solid rgb(255, 255, 255);
        border-radius: 50%;
        background: rgb(242, 67, 248);
      }
    }
  }
}
</style>
