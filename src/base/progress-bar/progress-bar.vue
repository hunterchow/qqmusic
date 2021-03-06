<template>
  <div class="progress-bar" ref="progressBar" @click="progressClick">
    <div class="bar-inner">
      <div class="progress" ref="progress"></div>
      <div class="progress-btn-wrapper" ref="progressBtn"
           @touchstart.prevent="progressTouchStart"
           @touchmove.prevent="progressTouchMove"
           @touchend="progressTouchEnd"
      >
        <div class="progress-btn"></div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {prefixStyle} from 'api/dom'
  const progressBtnWidth = 16
  const transform = prefixStyle('transform')
  export default {
    props: {
      percent: {
        type: Number,
        default: 0
      }
    },
    created(){
      this.touch = []
    },
    watch: {
      percent(newPercent){
        if (newPercent >= 0 && !this.initiated) {
          const barWidth = this.$refs.progressBar.clientWidth - progressBtnWidth
          const offsetWidth = newPercent * barWidth
          this._offset(offsetWidth)
        }
      }
    },
    methods: {
      progressClick(e){
      	this._offset(e.offsetX)
        this.updatePercent()
      },
      progressTouchStart(e){
        this.touch.initiated = true
        this.touch.startX = e.touches[0].pageX
        this.touch.progressWidth = this.$refs.progress.clientWidth
      },
      progressTouchMove(e){
        if (!this.touch.initiated) {
          return
        }
        const deltaX = e.touches[0].pageX - this.touch.startX
        const offsetWidth = Math.min(this.$refs.progressBar.clientWidth, Math.max(0, this.touch.progressWidth + deltaX))
        this._offset(offsetWidth)
      },
      progressTouchEnd(e){
        this.touch.initiated = false
        this.updatePercent()
      },
      updatePercent(){
        const barWidth = this.$refs.progressBar.clientWidth
        const percent = this.$refs.progress.clientWidth / barWidth
        this.$emit('updatePercent', percent)
      },
      _offset(offsetWidth){
        this.$refs.progress.style.width = `${offsetWidth}px`
        this.$refs.progressBtn.style[transform] = `translate3d(${offsetWidth}px,0,0)`
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"

  .progress-bar
    height: 30px
    .bar-inner
      position: relative
      top: 15px
      height: 2px
      background: rgba(0, 0, 0, 0.2)
      .progress
        position: absolute
        height: 100%
        background: $color-theme
      .progress-btn-wrapper
        position: absolute
        left: -8px
        top: -14px
        width: 30px
        height: 30px
        .progress-btn
          position: relative
          top: 7px
          left: 7px
          box-sizing: border-box
          width: 16px
          height: 16px
          border-radius: 50%
          background: $color-theme
</style>
