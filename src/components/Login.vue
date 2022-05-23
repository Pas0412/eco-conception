<template>
<!-- 登录页面 -->
  <div>
    <Row class="container">
      <i-col span="13" offset="2" class="login-img-box">
        <img src="static/img/sale.jpg" alt="">
      </i-col>
      <i-col span="7" class="login-box">
        <div class="login-container">
          <div class="login-header">
            <p>BIENVENUE</p>
          </div>
          <div class="form-box">
            <Form ref="formInline" :model="formDate" :rules="ruleInline">
              <FormItem prop="username">
                  <i-input type="text" v-model="formDate.username" clearable size="large" placeholder="Nom d'utilisateur">
                      <Icon type="person" slot="prepend"></Icon>
                  </i-input>
              </FormItem>
              <FormItem prop="password">
                  <i-input type="password" v-model="formDate.password" clearable size="large" placeholder="Mot de passe">
                      <Icon type="ios-locked-outline" slot="prepend"> </Icon>
                  </i-input>
              </FormItem>
              <FormItem>
                  <Button type="error" size="large" @click="handleSubmit('formInline')" long>Se connecter</Button>
              </FormItem>
          </Form>
          </div>
        </div>
      </i-col>
    </Row>
  </div>
</template>

<script>
import store from '@/vuex/store';
import { mapMutations, mapActions } from 'vuex';
export default {
  name: 'Login',
  data () {
    return {
      formDate: {
        username: '',
        password: ''
      },
      ruleInline: {
        username: [
          { required: true, message: 'Nom d\'utilisateur', trigger: 'blur' }
        ],
        password: [
          { required: true, message: 'Mot de passe', trigger: 'blur' },
          { type: 'string', min: 6, message: 'Le mot de passe ne doit pas être inférieur à 6 caractères', trigger: 'blur' }
        ]
      }
    };
  },
  methods: {
    ...mapMutations(['SET_USER_LOGIN_INFO']),
    ...mapActions(['login']),
    handleSubmit (name) {
      const father = this;
      console.log(this.formDate.username);
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.login(father.formDate).then(result => {
            if (result) {
              this.$Message.success('Succès');
              father.$router.push('/');
            } else {
              this.$Message.error('mauvais nom d\'utilisateur ou mot de passe');
            }
          });
        } else {
          this.$Message.error('Veuillez saisir le nom d\'utilisateur ou le mot de passe correct');
        }
      });
    }
  },
  store
};
</script>

<style scoped>
.container {
  margin-top: 30px;
  height: 485px;
  background-color: #fff;
}
.login-img-box {
  height: 485px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}
.login-img-box>img {
  width: 68%;
}
.login-box {
  height: 485px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.login-container {
  width: 80%;
  height: 280px;
  border: #ED3F14 solid 1px;
}
.login-header {
  height: 50px;
  font-size: 20px;
  text-align: center;
  line-height: 50px;
  letter-spacing: 5px;
  color: #fff;
  background-color: #ED3F14;
}
.form-box {
  width: 80%;
  margin: 30px auto;
}
</style>
