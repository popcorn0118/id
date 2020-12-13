<template>
  <div class="entry">
    <!-- <img src="assets/logo.png"> -->
    <p v-if="userLogin">
      歡迎: {{userName}} {{userEmail}}
      <span @click="handLogOut">{{'登出'}}</span>
    </p>
    <el-tabs v-else v-model="activeName" type="border-card">
      <el-tab-pane label="登入" name="login">
        <el-input v-model="form.email" placeholder="請輸入 E-mail"></el-input>
        <el-input v-model="form.password" placeholder="請輸入密碼" show-password></el-input>
        <el-button type="primary" @click="handLogin">登入</el-button>
      </el-tab-pane>
      <el-tab-pane label="註冊" name="legistered">
        <el-input v-model="form.name" placeholder="請輸入帳號"></el-input>
        <el-input v-model="form.email" placeholder="請輸入 E-mail"></el-input>
        <el-input v-model="form.password" placeholder="請輸入密碼" show-password></el-input>
        <el-button type="primary" @click="handRegistered">註冊</el-button>
      </el-tab-pane>
    </el-tabs>
    <p class="start">{{'© 2020 All Rights Reserved.'}}</p>
  </div>
</template>
<style lang="scss" scoped>
.entry {
  width: 300px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -60%);
  line-height: 20px;
  text-align: center;
}
.el-input {
  margin-bottom: 10px;
}
.el-button {
  width: 100%;
  margin-top: 10px;
}
.start {
    font-size: 10px;
    color: #a0a0a0;
    text-align: center;
}
</style>
<script>
import DB from '@/db.js'
const { msgUser } = DB
import { mapGetters, mapActions } from 'vuex';
export default {
  name: 'Home',
  data () {
    return {
      activeName: 'login',
      form: {
        name: '',
        password: '',
        email: ''
      }
    }
  },
  beforeMount() {
    this.getUser()
  },
  methods: {
    ...mapActions(
      'loginM', [ 'getUser', 'getUserLogin' ]
    ),
    handRegistered() {
      // 註冊
      firebase.auth().createUserWithEmailAndPassword(this.form.email, this.form.password).then((res) => {
        // 取得註冊當下的時間
        let date = new Date();
        let now = date.getTime();
        // 記錄相關資訊到 firebase realtime database
        msgUser.child(now).set({
          signup: now,
          ...this.form
        }).then(() => {
          // 儲存成功後顯示訊息
          this.$message({
            message: '註冊成功',
            type: 'success'
          });
          this.form.email = ''
          this.form.password = ''
        });
      }).catch(err => {
        // 註冊失敗時顯示錯誤訊息
        let isErr = ''
        switch(err.message) {
          case 'The email address is already in use by another account.':
            isErr = 'E-mail 已經被註冊過。';
            break;
          case 'The email address is badly formatted.':
            isErr = 'E-mail 格式錯誤。';
            break;
          case 'The password must be 6 characters long or more.':
            isErr = '請輸入密碼。';
            break;
          case 'Password should be at least 6 characters':
            isErr = '密碼至少應包含6個字符。';
            break;
          default:
            isErr = err.message
        }
        this.$message({
          message: isErr,
          type: 'error'
        });
      });
    },
    handLogin() {
      // 登入
      firebase.auth().signInWithEmailAndPassword(this.form.email, this.form.password).then((res) => {
        let user = firebase.auth().currentUser;
        this.$message({
          message: '登入成功',
          type: 'success'
        });
        this.getUserLogin(true)
        this.getUser()
        this.form.email = ''
        this.form.password = ''
        this.$router.push({'name': 'Home'})
      }).catch(err => {
        // 登入失敗時顯示錯誤訊息
        let isErr = ''
        switch(err.message) {
          case 'There is no user record corresponding to this identifier. The user may have been deleted.':
            isErr = '查無該用戶。';
            break;
          case 'The email address is badly formatted.':
            isErr = 'E-mail 格式錯誤。';
            break;
          case 'The password must be 6 characters long or more.':
            isErr = '請輸入密碼。';
            break;
          case 'Password should be at least 6 characters':
            isErr = '密碼至少應包含6個字符。';
            break;
          case 'The password is invalid or the user does not have a password.':
            isErr = '密碼無效或用戶沒有密碼。';
            break;
          default:
            isErr = err.message
        }
        this.$message({
          message: isErr,
          type: 'error'
        });
      })
    },
    handLogOut() {
      firebase.auth().signOut().then((res) => {
        var user = firebase.auth().currentUser;
        this.getUserLogin(false)
        this.$message({
          message: '您已登出',
          type: 'success'
        });
      })
    }
  },
  computed: {
    ...mapGetters(
      'loginM', [ 'userName', 'userEmail', 'userLogin' ]
    )
  }
    
}
</script>
