<template>
  <div class='weeker'>
    <h2 class='weeker-tittle'>周末去哪儿</h2>
    <div class='product' v-for='item of list' :key='item.id' >
      <div class='product-img'>
         <img class="img" :src='item.imgUrl'>
      </div>
       <div class='product-info'>
         <p class='product-name'>{{item.title}}</p>
        <p class='product-desc'>{{item.desc}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeWeek',
  props: {
    list: Array
  }
}
</script>

<style lang='stylus' scoped>
  @import '~style/mixins.styl'
  .weeker-tittle
    height: .8rem
    line-height: .8rem
    color: #212121
    padding-left: .26rem
  .product
    margin-bottom: .1rem
    background: #fff
    .product-img
      overflow: hidden
      height: 0
      padding-bottom: 37.08%
      .img
        width:100%
    .product-info
       padding: .2rem
       .product-name
        color: #212121
        font-size: .28rem
        padding-right: 1.4rem
        line-height: .48rem
        ellipsis()
      .product-desc
        color: #616161
        font-size: .24rem
        padding-right: 1.4rem
        line-height: .42rem
        ellipsis()
</style>
