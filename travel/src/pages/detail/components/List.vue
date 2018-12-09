<template>
  <div>
    <div
      class="list"
      v-for="(item, index) of list"
      :key="index"
    >
      <div class="list-title border-bottom">
        <span class="list-title-icon">
        </span>
        {{item.title}}
      </div>
      <div v-if="item.children" class="list-children">
        <detail-list :list="item.children"></detail-list>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailList',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
.list
  background: #fff
  .list-title
    line-height: .88rem
    font-size: .32rem
    text-indent: .1rem
    .list-title-icon
      position: relative
      display: inline-block;
      width: .36rem;
      height: .36rem;
      top: .06rem;
      left: .15rem;
      background: url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat;
      margin-right: .1rem;
      background-size: .4rem 3rem;
  .list-children
    padding: 0 .2rem
</style>
