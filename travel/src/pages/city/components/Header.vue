<template>
  <div class="header">
    城市选择
    <router-link to='/'>
      <div class="iconfont header-back">&#xe624;</div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'City'
}
</script>

<style lang="stylus" scoped>
  @import '~style/variables.styl'
  .header
    position: relative
    overflow: hidden
    height: $headerHeight
    line-height: $headerHeight
    text-align: center
    color: #fff
    background: $bgcolor
    font-size: .32rem
    .header-back
      position: absolute
      width: .64rem
      font-size: .4rem
      top: 0
      left: 0
      text-align: center
      color: #fff
</style>
