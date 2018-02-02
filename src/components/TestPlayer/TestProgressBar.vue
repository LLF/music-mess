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
        @mousedown.prevent="progressPointStart"
      >
        <div class="player-progress-point"></div>
      </div>
    </div>
  </div>
</template>

<script>
const MAX_VOL = 100
const MIN_VOL = 0

export default {
  data () {
    return {
      isMoving: false,
      startX: 0,
      // From 0 ~ length of bar
      pointPosition: 0

    }
  },
  props: {
    percent: {
      type: Number,
      default: 0,
      validator (value) {
        return MAX_VOL >= value && MIN_VOL <= value
      }
    },
    bWidth: {
      type: Number,
      default: 0
    },
    bHeight: {
      type: Number,
      default: 0
    }
  },

  computed: {
    progressLength () {
      return this.$refs.progressBar.clientWidth
    },
    progressLeft () {
      return this.$refs.progressBar.getBoundingClientRect().left
    },
    barRect () {
      return {
        width: this.bWidth,
        height: this.bHeight
      }
    }
  },

  methods: {
    progressClick (event) {
      let offsetWidth = event.pageX - this.progressLeft
      if (offsetWidth > this.progressLength) offsetWidth = this.progressLength
      if (offsetWidth < 0) offsetWidth = 0
      this.pointPosition = offsetWidth
      this._movePoint(offsetWidth)
    },

    progressPointStart (event) {
      this.isMoving = true
      this.startX = event.pageX
      window.addEventListener('mousemove', this.progressPointMove)
      window.addEventListener('mouseup', this.progressPointEnd)
      window.addEventListener('contextmenu', this.progressPointEnd)
    },

    progressPointMove (event) {
      if (!this.isMoving) return
      let offsetWidth = event.pageX - this.startX + this.pointPosition
      if (offsetWidth > this.progressLength) offsetWidth = this.progressLength
      if (offsetWidth < 0) offsetWidth = 0
      // let offset = offsetWidth + this.pointPosition
      // let offset = Math.min(this.$refs.progressBar.clientWidth, Math.max(0, offsetWidth))
      this._movePoint(offsetWidth)
    },

    progressPointEnd (event) {
      this.isMoving = false
      let offsetWidth = event.pageX - this.progressLeft
      if (offsetWidth > this.progressLength) offsetWidth = this.progressLength
      if (offsetWidth < 0) offsetWidth = 0
      this.pointPosition = offsetWidth
      window.removeEventListener('mousemove', this.progressPointMove)
      window.removeEventListener('mouseup', this.progressPointEnd)
      window.removeEventListener('contextmenu', this.progressPointEnd)
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
