<template>
  <el-table
    :data="tableData"
    border
    stripe
    style="width: 100%">
    <el-table-column
      v-for="({label, prop}) in col"
      :key="label+prop"
      fixed
      :prop="prop"
      :label="label">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="100">
      <template slot-scope="scope">
        <el-button type="text" size="small">刪除</el-button>
        <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>
<style scoped>
</style>
<script>
export default {
  name: 'Table',
  data () {
    return {
      col: [
        { label: '編號', prop: 'num' },
        { label: '類別', prop: 'type' },
        { label: '主管姓名', prop: 'name1' },
        { label: '業務姓名', prop: 'name2' },
        { label: '性別', prop: 'sex' },
        { label: '地區', prop: 'city' },
        { label: '地址', prop: 'address' }
      ]
    }
  },
  methods: {
    handleClick(row) {
      console.log(row);
    }
  },
  computed: {
    tableData() {
      return [{
        num: '2016-05-02',
        name1: '李威豬',
        name2: '王小虎',
        type: '協商',
        sex: '男',
        city: '台北',
        address: '萬華區00路289巷',
        zip: 200333
      }, {
        num: '2016-05-04',
        name1: '李威胖',
        name2: '王中虎',
        type: '房貸',
        sex: '女',
        city: '台北',
        address: '萬華區00路289巷',
        zip: 200333
      }, {
        num: '2016-05-01',
        name1: '李威渣',
        name2: '王大虎',
        type: '信貸',
        sex: '女',
        city: '高雄',
        address: '前鎮區00路289巷',
        zip: 200333
      }, {
        num: '2016-05-03',
        name1: '李威機',
        name2: '王特虎',
        type: '車貸',
        sex: '男',
        city: '台北',
        address: '萬華區00路289巷',
        zip: 200333
      }]
    }
  }
}
</script>
