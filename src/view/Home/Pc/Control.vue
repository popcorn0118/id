<template>
  <el-form :inline="true" :model="formInline" class="demo-form-inline">
  <el-form-item>
    <el-input v-model="formInline.user" placeholder="案件編號"></el-input>
  </el-form-item>
  <el-form-item>
    <el-select v-model="formInline.region" placeholder="協商主管">
      <el-option label="李威豬" value="1"></el-option>
      <el-option label="李威胖" value="2"></el-option>
      <el-option label="李威渣" value="3"></el-option>
      <el-option label="李威機" value="4"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="onSubmit">查询</el-button>
    <el-button type="success" @click="submitAdd">新增</el-button>
  </el-form-item>
</el-form>
</template>
<style scoped>
</style>
<script>
export default {
  name: 'Control',
  data() {
      return {
        formInline: {
          user: '',
          region: ''
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      },
      submitAdd() {
        this.$parent.dialogVisible = true
      }
    }
}
</script>
