<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">所在城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">
              {{this.ListCity}}
            </div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div
            class="button-wrapper"
            v-for="item of hot"
            :key="item.id"
            @click="handleCityClick(item.name)"
          >
            <div class="button">
              {{item.name}}
            </div>
          </div>
        </div>
      </div>
      <div
        class="area"
        v-for="(item,key) of cities"
        :key="key"
        :ref="key"
      >
        <div class="title border-topbottom">{{key}}</div>
        <div class="item-list" v-for="city of item" :key="city.id">
          <div class="item border-topbottom" @click="handleCityClick(city.name)">{{city.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import BScroll from 'better-scroll'
export default {
  name: 'CityList',
  computed: {
    ...mapState({
      ListCity: 'city'
    })
  },
  props: {
    cities: Object,
    hot: Array,
    letter: String
  },
  methods: {
    handleCityClick (city) {
      // this.$store.commit('changeCity', city)
      this.changeCity(city)
      this.$router.push('/')
    },
    ...mapMutations(['changeCity'])
  },
  watch: {
    // 点击跳转
    letter () {
      if (this.letter) {
        const element = this.$refs[this.letter][0]
        this.scroll.scrollToElement(element)
      }
    }
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper)
  }
}
</script>

<style lang="stylus" scoped>
  .border-topbottom
    &:before
      border-color:#ccc
  .list
    overflow: hidden
    position: absolute
    top: 1.58rem
    left: 0
    right: 0
    bottom: 0
    .title
      line-height: .64rem
      font-size: .26rem
      padding-left: .26rem
      colot: #666
      background: #f5f5f5
    .button-list
      padding: .1rem
      overflow: hidden
      padding: .1rem .6rem .1rem .1rem
      .button-wrapper
        width: 33.33%
        float: left
        .button
          margin: .1rem
          padding: .1rem 0
          text-align: center
          border-radius: .06rem
          border: .02rem solid #ccc
    .item
      line-height: .76rem
      padding-left: .2rem
</style>
