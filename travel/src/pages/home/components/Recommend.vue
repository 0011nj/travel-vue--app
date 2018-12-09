<template>
  <div class='youlike'>
    <div class='like-title'>
      <span class='title'>
        <img src='http://img1.qunarzz.com/piao/fusion/1711/89/ebc329f16c55bb02.png' alt='猜你喜欢' class='title-img'>
        <span>猜你喜欢</span>
      </span>
    </div>

    <div
      class='item border-bottom'
      v-for="item of list"
      @click="handleIdClick(item.id)"
      :key="item.id"
    >
      <img class='item-img' :src='item.imgUrl'>
      <div class='item-info'>
        <div class='item-title'>{{item.title}}</div>
        <div class='item-comment'>{{item.comment_num}}条评论</div>
        <div class='item-price'>
          <span class='price'>￥{{item.price}}</span>起
          <span class='address'>{{item.desc}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  name: 'HomeRecommend',
  props: {
    list: Array
  },
  methods: {
    handleIdClick (id) {
      this.changeId(id)
      this.$router.push('/detail/' + id)
    },
    ...mapMutations(['changeId'])
  }
}
</script>

<style lang='stylus' scoped>
  @import '~style/mixins.styl'
  .youlike
    margin-top: 0.2rem
    background: #fff
    .like-title
      padding: .24rem .2rem
      .title
        font-size: 0.32rem
        .title-img
          display: inline-block
          width: .3rem
          height: .3rem
          margin-bottom: 0.06rem
  .item
    display: flex
    overflow: hidden
    heigth: 1.9rem
    .item-img
      padding: .2rem
      width: 2rem
      height: 2rem
    .item-info
      flex: 1
      min-width: 0
      padding: .2rem 0
      .item-title
        margin-top: .1rem
        line-height: .44rem
        color: #212121
        font-size: .32rem
        ellipsis()
      .item-comment
        margin-top: .14rem
        // margin-left: 2rem
        height: .34rem
        color: #616161
        font-size: .24rem
        line-height: .34rem
      .item-price
        position: relative;
        margin-top: .22rem;
        font-size: .24rem
        line-height: .4rem
        .price
          color: #ff8300
          font-size: .4rem
        .address
          position: absolute
          right: .24rem
</style>
