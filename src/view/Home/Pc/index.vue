<template>
  <div>
    <Control />
    <Table />
    <DialogAdd />
  </div>
</template>
<style scoped>
</style>
<script>
import Control from './Control'
import Table from './Table'
import DialogAdd from './DialogAdd'
export default {
  name: 'Home_Pc',
  components: {
    Control,
    Table,
    DialogAdd
  },
  data () {
    return {
      value: true,
      dialogVisible: false
    }
  }
}
</script>
