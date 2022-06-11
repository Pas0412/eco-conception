<template>
  <div class="info-form">
    <Form ref="formValidate" :model="formValidate" :label-width="80" :rules="ruleValidate">
      <FormItem label="Tel" prop="phone">
          <i-input v-model="formValidate.phone" clearable size="large"  placeholder="Votre numéro portable"></i-input>
      </FormItem>
      <FormItem label="Vérification" prop="checkNum">
          <i-input v-model="formValidate.checkNum" size="large"  placeholder="Votre code de vérification">
            <Button slot="append" @click="getcheckNum">Obtenir</Button>
          </i-input>
      </FormItem>
      <Button type="error" size="large" long @click="handleSubmit('formValidate')">Validate Portable</Button>
    </Form>
  </div>
</template>

<script>
import store from '@/vuex/store';
import { mapMutations } from 'vuex';
export default {
  name: 'CheckPhone',
  data () {
    return {
      formValidate: {
        phone: '',
        checkNum: ''
      },
      ruleValidate: {
        phone: [
          { required: true, message: 'Le numéro de portable ne peut pas être vide', trigger: 'blur' },
          { type: 'string', pattern: /^0[1-9][0-9]{8}$/, message: 'Mauvais format', trigger: 'blur' }
        ],
        checkNum: [
          { required: true, message: 'Le code de vérification ne peut pas être vide', trigger: 'blur' },
          { type: 'string', min: 4, max: 4, message: 'Mauvais format', trigger: 'blur' }
        ]
      }
    };
  },
  methods: {
    ...mapMutations(['SET_SIGN_UP_SETP']),
    getcheckNum () {
      if (this.formValidate.phone.length === 10) {
        this.$Message.success({
          content: 'Code: 1234',
          duration: 6,
          closable: true
        });
      } else {
        this.$Message.error({
          content: 'S\'il vous plaît entrer un numéro de téléphone valide',
          duration: 6,
          closable: true
        });
      }
    },
    handleSubmit (name) { // Submit vérification
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.$router.push({ path: '/SignUp/inputInfo', query: { phone: this.formValidate.phone } });
          this.SET_SIGN_UP_SETP(1);
        } else {
          this.$Message.error({
            content: 's\'il vous plaît entrer des information valide',
            duration: 6,
            closable: true
          });
        }
      });
    }
  },
  store
};
</script>

<style scoped>
.info-form {
  width: 90% !important;
}
</style>
