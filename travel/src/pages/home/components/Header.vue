<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主题</div>
    <router-link to='/city'>
      <div class="header-right">
        <!-- {{this.$store.state.city}} -->
        {{this.city}}
        <span class="iconfont arrow-icon">&#xe64a;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'HomeHeader',
  computed: {
    ...mapState(['city'])
  }
}
</script>

<style lang="stylus" scoped>
@import '~style/variables.styl'
.header
  display: flex
  line-height: $headerHeight
  background: $bgcolor
  color: #fff
  .header-left
    width: .64rem
    float: left
    .back-icon
      text-align: center
      font-size: .4rem
  .header-input
    flex: 1
    color: #ccc
    height: .64rem
    line-height: .64rem
    background: #fff
    border-radius: .5rem
    margin-top: .11rem
    // margin-left: .2rem
    padding-left: .2rem
  .header-right
    min-width: 1.02rem
    padding: 0 .1rem
    float: right
    text-align: center
    color: #fff
    .arrow-icon
      font-size: .25rem
</style>
