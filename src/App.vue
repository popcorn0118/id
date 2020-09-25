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
    // this.$http.get('https://randomuser.me/').then((res) => {
    //   console.log(res.data)
    // })
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
