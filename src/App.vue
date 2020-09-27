<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>
<style lang="scss">
@import '~@CSS/main.scss';
</style>
<script>
export default {
  name: 'App',
  created() {
    // 測試 api
    // this.$http.get('https://randomuser.me/api').then((res) => {
    //   console.log(res.data)
    // })
  }
}
</script>
