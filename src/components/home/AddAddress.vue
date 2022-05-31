<template>
  <div>
    <div class="add-container">
      <div class="add-title">
        <h1>Ajouter d'adresse</h1>
      </div>
      <div class="add-box">
        <Form :model="formData" label-position="left" :label-width="100" :rules="ruleInline">
          <FormItem label="Destinataire" prop="name">
            <i-input v-model="formData.name" size="large"></i-input>
          </FormItem>
          <FormItem label="Zone de réception" prop="address">
            <i-input v-model="formData.province" size="large"></i-input>
            <i-input v-model="formData.city" size="large"></i-input>
          </FormItem>
          <FormItem label="Adresse de livraision" prop="address">
            <i-input v-model="formData.address" size="large"></i-input>
          </FormItem>
          <FormItem label="Numéro portable" prop="phone">
            <i-input v-model="formData.phone" size="large"></i-input>
          </FormItem>
          <FormItem label="Code postal" prop="postalcode">
            <i-input v-model="formData.postalcode" size="large"></i-input>
          </FormItem>
        </Form>
      </div>
      <div class="add-submit">
        <Button type="primary">Ajouter</Button>
      </div>
    </div>
  </div>
</template>

<script>
import Distpicker from 'v-distpicker';
import InputInfo from '../signUp/InputInfo';
export default {
  name: 'AddAddress',
  data () {
    return {
      formData: {
        name: '',
        address: '',
        phone: '',
        postalcode: '',
        province: 'Franche-comté',
        city: 'Belfort'
      },
      ruleInline: {
        name: [
          { required: true, message: 'Nom', trigger: 'blur' }
        ],
        address: [
          { required: true, message: 'Adresse', trigger: 'blur' }
        ],
        postalcode: [
          { required: true, message: 'Code postal', trigger: 'blur' }
        ],
        phone: [
          { required: true, message: 'Numéro portable obligatoire', trigger: 'blur' },
          { type: 'string', pattern: /^0[1-9][0-9]{8}$/, message: 'Mauvais format', trigger: 'blur' }
        ]
      }
    };
  },
  methods: {
    getProvince (data) {
      this.formData.province = data.value;
    },
    getCity (data) {
      this.formData.city = data.value;
    }
  },
  components: {
    InputInfo,
    Distpicker
  }
};
</script>

<style scoped>
.add-container {
  margin: 15px auto;
  width: 60%;
  min-width: 600px;
}
.add-title {
  margin-bottom: 15px;
  text-align: center;
}
.add-submit {
  display: flex;
  justify-content: center;
}
</style>
