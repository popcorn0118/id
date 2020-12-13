<template>
<div>
  <components :is="compRWD" />
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
      compRWD: 'Pc'
    }
  },
  methods: {
    // 全域
    ...mapActions([
      'getCount'
    ]),
    // 區域: homeM
    ...mapActions(
      'homeM', [ 'getRandomuser' ]
    ),
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
    // 全域
    ...mapGetters([
      'isCount'
    ]),
    // 區域: homeM
    ...mapGetters(
      'homeM', [ 'isImg' ]
    )
  }
}
</script>
