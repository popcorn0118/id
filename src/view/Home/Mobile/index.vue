
<template>
  <div>
    {{http}} {{'Mobile'}}
    <mt-header title="标题过长会隐藏后面的内容啊哈哈哈哈">
    <router-link to="/" slot="left">
      <mt-button icon="back">返回</mt-button>
    </router-link>
    <mt-button icon="more" slot="right"></mt-button>
  </mt-header>
  </div>
</template>
<script>
import Pc from '@V/Home/Pc'
export default {
  name: 'Home_Mobile',
  mixins: [Pc]
}
</script>