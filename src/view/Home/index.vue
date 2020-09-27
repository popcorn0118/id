<template>
<div>
  <components :is="compRWD" />
  <el-button @click="fetchAdd">{{'加加:'}}{{isCount}}</el-button>
  <el-button @click="fetchImg">{{'取得隨機圖片'}}</el-button>
  <img :src="isImg" alt="">
</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Pc from '@V/Home/Pc'
import Mobile from '@V/Home/Mobile'
export default {
  name: 'Home',
  components: {
    Pc,
    Mobile
  },
  data () {
    return {
      msg: process.env.NODE_ENV,
      http: process.env.HTTP_PATH,
      value: true,
      compRWD: 'Mobile'
    }
  },
  methods: {
    ...mapActions('homeM', [
      'getRandomuser',
      'getCount'
    ]),
    fetchAdd() {
      // 沒有用vuex的話就要用:dispatch操作staoee裡的actions
      // this.$store.dispatch('getCount', 1)
      this.getCount(1)
    },
    fetchImg() {
      this.getRandomuser()
    }
  },
  computed: {
    ...mapGetters('homeM', [
      'isCount',
      'isImg'
    ])
  }
}
</script>
