<template>
  <div class="song-list">
    <ul>
      <li class="item border-1px" v-for="(song,index) in songs" @click="playItem(song,index)">
        <div class="content">
          <h2 class="name">{{song.name}}</h2>
          <div class="desc">{{getDesc(song)}}</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      songs: {
        type: Array,
        default: []
      }
    },
    components: {
      scroll
    },
    methods: {
      getDesc(song){
        return `${song.singer} · ${song.album}`
      },
      playItem(item,index){
      	this.$emit('playSong',item,index)
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  @import "~common/stylus/mixin"

  .song-list
    .item
      display: flex
      align-items: center
      box-sizing: border-box
      height: 64px
      font-size: $font-size-medium
      border-1px(rgba(0,0,0,0.2))
      .rank
        flex: 0 0 25px
        width: 25px
        margin-right: 30px
        text-align: center
        .icon
          display: inline-block
          width: 25px
          height: 24px
          background-size: 25px 24px
          &.icon0
            bg-image('first')
          &.icon1
            bg-image('second')
          &.icon2
            bg-image('third')
        .text
          color: $color-theme
          font-size: $font-size-large
      .content
        flex: 1
        line-height: 20px
        overflow: hidden
        .name
          no-wrap()
          color: $color-text
        .desc
          no-wrap()
          margin-top: 4px
          font-size: 14px
          color: rgba(0, 0, 0, .6)
</style>
