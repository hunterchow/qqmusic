<template>
  <div class="m-header">
    <div class="icon"></div>
    <h1 class="text">QQ音乐</h1>
    <div class="download">
      <h1>下载APP</h1>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  @import "~common/stylus/mixin"

  .m-header
    position: relative
    height: 44px
    background-color: #31c27c
    color: #fff
    font-size: 0
    .icon
      display: inline-block
      vertical-align: top
      margin-top: 6px
      width: 32px
      height: 32px
      margin-left: 10px
      margin-right: 9px
      bg-image('logo')
      background-size: 32px 32px
    .text
      display: inline-block
      vertical-align: top
      line-height: 44px
      font-size: $font-size-large
    .download
      position: absolute
      display: inline-block
      right: 10px
      top: 8px
      height: 28px
      padding: 0 12px
      line-height: 28px
      border-radius: 99px
      font-size: 16px
      background: #149c5a
      color: #fff
    .mine
      position: absolute
      top: 0
      right: 0
      .icon-mine
        display: block
        padding: 12px
        font-size: 20px
        color: $color-theme
</style>
