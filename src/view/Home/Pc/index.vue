<template>
  <div>
    {{http}} {{'Pc'}}
    <el-switch
      v-model="value"
      active-color="#13ce66"
      inactive-color="#ff4949">
    </el-switch>
  </div>
</template>
<style scoped>
</style>
<script>
export default {
  name: 'Home_Pc',
  data () {
    return {
      msg: process.env.NODE_ENV,
      http: process.env.HTTP_PATH,
      value: true
    }
  }
}
</script>
