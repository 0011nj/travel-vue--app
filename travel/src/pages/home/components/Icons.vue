<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page,id) of pages" :key='id'>
        <div class="icon" v-for="(item,index) of page" :key='index'>
          <div class="icon-img">
            <img class="icon-img-content" :src="item.imgUrl">
          </div>
          <p class="icon-txt">{{item.title}}</p>
        </div>
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default{
  name: 'HomeIcon',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination'
      }
    }
  },
  computed: {
    pages () {
      const pages = []
      this.list.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~style/variables.styl'
  @import '~style/mixins.styl'
  .icons >>> .swiper-container
    // overflow: hidden
    // width: 100%
    height: 0
    background: #fff
    padding-bottom: 55%
    .icon
      position: relative
      overflow: hidden
      float: left
      width: 25%
      height: 0
      padding-bottom: 25%
      .icon-img
        position: absolute
        top: 0
        left: 0
        right: 0
        bottom: .44rem
        box-sizing: border-box
        padding: .1rem
        .icon-img-content
          display: block
          margin: auto
          height: 100%
      .icon-txt
        position: absolute
        bottom: 0
        left: 0
        right: 0
        text-align: center
        height: .44rem
        line-height: .44rem
        color: $darkTextColor
        overflow:hidden
        ellipsis()
</style>
