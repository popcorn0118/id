<template>
<div>
  <!-- <components :is="compRWD" /> -->
  {{123}}
</div>
  
</template>

<script>
import Pc from '@V/Home/index'
import Mobile from '@V/Home/index'
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
