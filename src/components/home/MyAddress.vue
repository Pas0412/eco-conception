<template>
  <div>
    <div class="address-box" v-for="(item, index) in address" :key="index">
      <div class="address-header">
        <span>{{item.name}}</span>
        <div class="address-action">
          <span @click="edit(index)"><Icon type="edit"></Icon> Modifier</span>
          <span @click="del(index)"><Icon type="trash-a"></Icon> Annuler</span>
        </div>
      </div>
      <div class="address-content">
        <p><span class="address-content-title">Destinataire:</span> {{item.name}}</p>
        <p><span class="address-content-title">Zone de réception:</span> {{item.province}} {{item.city}}</p>
        <p><span class="address-content-title">Adress de livraision:</span> {{item.address}}</p>
        <p><span class="address-content-title">Code postal:</span> {{item.postalcode}}</p>
      </div>
    </div>
    <Modal v-model="modal" width="530">
        <p slot="header">
          <Icon type="edit"></Icon>
          <span>Modifier d'adresse</span>
        </p>
        <div>
            <Form :model="formData" label-position="left" :label-width="100" :rules="ruleInline">
              <FormItem label="Destinataire" prop="name">
                <i-input v-model="formData.name" size="large"></i-input>
              </FormItem>
              <FormItem label="Zone" prop="address">
                <i-input v-model="formData.province" size="large"></i-input>
                <i-input v-model="formData.city" size="large"></i-input>
              </FormItem>
              <FormItem label="Adresse" prop="address">
                <i-input v-model="formData.address" size="large"></i-input>
              </FormItem>
              <FormItem label="Tel" prop="phone">
                <i-input v-model="formData.phone" size="large"></i-input>
              </FormItem>
              <FormItem label="CodePostal" prop="postalcode">
                <i-input v-model="formData.postalcode" size="large"></i-input>
              </FormItem>
            </Form>
        </div>
        <div slot="footer">
            <Button type="primary" size="large" long @click="editAction">Modifier</Button>
        </div>
    </Modal>
  </div>
</template>

<script>
import store from '@/vuex/store';
import { mapState, mapActions } from 'vuex';
import Distpicker from 'v-distpicker';
export default {
  name: 'MyAddress',
  data () {
    return {
      modal: false,
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
          { required: true, message: 'Code Postal', trigger: 'blur' }
        ],
        phone: [
          { required: true, message: 'Numéro portable obligatoire', trigger: 'blur' },
          { type: 'string', pattern: /^0[1-9][0-9]{8}$/, message: 'Mauvais format', trigger: 'blur' }
        ]
      }
    };
  },
  created () {
    this.loadAddress();
  },
  computed: {
    ...mapState(['address'])
  },
  methods: {
    ...mapActions(['loadAddress']),
    edit (index) {
      this.modal = true;
      this.formData.province = this.address[index].province;
      this.formData.city = this.address[index].city;
      this.formData.area = this.address[index].area;
      this.formData.address = this.address[index].address;
      this.formData.name = this.address[index].name;
      this.formData.phone = this.address[index].phone;
      this.formData.postalcode = this.address[index].postalcode;
    },
    editAction () {
      this.modal = false;
      this.$Message.success('Succès');
    },
    del (index) {
      this.$Modal.confirm({
        title: 'Attention',
        content: 'Voulez-vous vraiment supprimer cette adresse ?',
        onOk: () => {
          this.$Message.success('Succès');
        },
        onCancel: () => {
          this.$Message.info('Annuler');
        }
      });
    }
  },
  components: {
    Distpicker
  },
  store
};
</script>

<style scoped>
.address-box {
  padding: 15px;
  margin: 15px;
  border-radius: 5px;
  box-shadow: 0px 0px 5px #ccc;
}
.address-header {
  height: 35px;
  display: flex;
  justify-content: space-between;
  color: #232323;
  font-size: 18px;
}
.address-content {
  font-size: 14px;
}
.address-content-title {
  color: #999;
}
.address-action span{
  margin-left: 15px;
  font-size: 14px;
  color: #2d8cf0;
  cursor: pointer;
}
</style>
