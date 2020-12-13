<template>
    <el-dialog
        title="新增客戶"
        :visible.sync="$parent.dialogVisible"
        :show-close="false"
        width="80%"
        @open="open"
    >
        <el-form :model="form" label-position="top">
            <el-row :gutter="20">
                <el-col :span="6">
                    <el-form-item label="編號">
                        <el-input v-model="form.name" autocomplete="off" placeholder="編號"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="6">
                    <el-form-item label="類別">
                        <el-select v-model="form.type" placeholder="類別">
                            <el-option label="協商" value="1"></el-option>
                            <el-option label="房貸" value="2"></el-option>
                            <el-option label="信貸" value="3"></el-option>
                            <el-option label="車貸" value="4"></el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col :span="6">
                    <el-form-item label="主管姓名">
                        <el-input v-model="form.name1" autocomplete="off"></el-input>
                    </el-form-item>
                </el-col>
                <el-col  :span="6">
                    <el-form-item label="業務姓名">
                        <el-input v-model="form.name2" autocomplete="off"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button @click="dialogClance">取 消</el-button>
            <el-button type="primary" @click="handreSubmit">确 定</el-button>
        </div>
    </el-dialog>
</template>
<style lang="scss">
    .el-dialog__header {
        background: #409eff;
        .el-dialog__title {
            color: #fff;
        }
    }
    .el-select {
        width: 100%;
    }
</style>
<script>
import DB from '@/db.js'
const { dataRef } = DB
import { mapGetters, mapActions } from 'vuex';
export default {
  name: 'Control',
  data() {
      return {
        form: {
          num: '',
          type: '',
          name1: '',
          name2: '',
          sex: '',
          city: '',
          address: ''
        },
        formLabelWidth: '100px',
        defauleForm: {
            num: '',
            type: '',
            name1: '',
            name2: '',
            sex: '',
            city: '',
            address: ''
        }
      }
    },
    methods: {
      handreSubmit() {
        // 取得新增當下的時間
        let date = new Date();
        let now = date.getTime();
        dataRef.child(now).set(this.form).then(() => {
            this.$message({
                message: '新增成功',
                type: 'success'
            })
            this.dialogClance()
        })
        console.log(1, this.form)
      },
      dialogClance() {
          this.$parent.dialogVisible = false
      },
      open() {
          this.form = {}
          this.form = { ...this.defauleForm }
          console.log('open', 'defauleForm', this.defauleForm, 'form', this.form)
      }
    }
}
</script>
