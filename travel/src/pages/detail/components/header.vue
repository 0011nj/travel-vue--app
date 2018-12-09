<template>
  <div>
    <router-link
      tag="div"
      to="/"
      class="header-abs"
      v-show="showAbs"
    >
      <div class="iconfont header-abs-back">&#xe624;</div>
    </router-link>
    <div
      class="header-fixed"
      v-show="!showAbs"
      :style="opacityStyle"
    >
      <router-link to='/'>
        <div class="iconfont header-fixed-back">&#xe624;</div>
      </router-link>
      城市选择
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll () {
      // console.log('hello')
      const top = document.documentElement.scrollTop
      if (top > 10) {
        let opacity = top / 140
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = { opacity }
        this.showAbs = false
      } else {
        this.showAbs = true
      }
    }
  },
  activated () {
    window.addEventListener('scroll', this.handleScroll)
  },
  deactivated () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="stylus" scoped>
  @import '~style/variables.styl'
  .header-abs
    position: absolute
    width: .72rem
    height: .72rem
    top: .1rem
    left: .1rem
    line-height: .72rem
    text-align: center
    border-radius: .4rem
    background: rgba(0, 0, 0, 0.4)
    .header-abs-back
      color: #fff
      font-size: .4rem
  .header-fixed
    z-index: 2
    position: fixed
    top: 0
    left: 0
    right: 0
    overflow: hidden
    height: $headerHeight
    line-height: $headerHeight
    text-align: center
    color: #fff
    background: $bgcolor
    font-size: .32rem
    .header-fixed-back
      position: absolute
      width: .64rem
      font-size: .4rem
      top: 0
      left: 0
      text-align: center
      color: #fff
</style>
