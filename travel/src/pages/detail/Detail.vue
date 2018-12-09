<template>
  <div>
    <detail-banner
      :sightName="sightName"
      :bannerImg="bannerImg"
      :bannerImgs="gallaryImgs"
    ></detail-banner>
    <detail-header></detail-header>
    <detail-list :list="list"></detail-list>
    <div class="centent"></div>
  </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
import axios from 'axios'
import { mapState } from 'vuex'
export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  data () {
    return {
      lastId: '',
      sightName: '',
      bannerImg: '',
      gallaryImgs: [],
      list: []
    }
  },
  computed: {
    ...mapState(['id'])
  },
  methods: {
    getDetailInfo () {
      axios.get('/api/detail.json', {
        params: {
          id: this.id
        }
      }).then(this.handleGetDataSucc)
    },
    handleGetDataSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.sightName = data.sightName
        this.bannerImg = data.bannerImg
        this.gallaryImgs = data.gallaryImgs
        this.list = data.categoryList
      }
    }
  },
  mounted () {
    this.lastId = this.id
    this.getDetailInfo()
  },
  activated () {
    if (this.lastId !== this.id) {
      this.lastId = this.id
      this.getDetailInfo()
    }
  }
}
</script>

<style lang="stylus" scoped>
.centent
  height: 20rem
</style>
