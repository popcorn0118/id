<template>
  <components :is="compRWD" />
</template>

<script>
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
  }
}
</script>
