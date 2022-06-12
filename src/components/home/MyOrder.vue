<template>
  <div>
    <Table border :columns="columns" :data="orderList" size="large" no-data-text="Vous n'avez pas encore de commande, dépêchez-vous et faites vos courses！"></Table>
    <div class="page-size">
      <Page :total="100" show-sizer></Page>
    </div>
  </div>
</template>

<script>
import store from '@/vuex/store';
import { mapState, mapActions } from 'vuex';
export default {
  name: 'MyOrder',
  created () {
    this.getOrder(this.userInfo.username);
  },
  data () {
    return {
      columns: [
        {
          title: 'Numéro de commande',
          key: 'id',
          width: 150,
          align: 'center'
        },
        {
          title: 'Photo',
          key: 'img',
          width: 86,
          render: (h, params) => {
            return h('div', [
              h('img', {
                attrs: {
                  src: params.row.img
                },
                style: 'height:40px'
              })
            ]);
          },
          align: 'center'
        },
        {
          title: 'Titre',
          key: 'title',
          align: 'center'
        },
        {
          title: 'Marque',
          width: 198,
          key: 'brand',
          align: 'center'
        },
        {
          title: 'Nombre',
          key: 'number',
          width: 98,
          align: 'center'
        },
        {
          title: 'Prix',
          width: 68,
          key: 'price',
          align: 'center'
        },
        {
          title: 'Moment de l\'achat',
          width: 120,
          key: 'time',
          align: 'center'
        }
      ]
    };
  },
  computed: {
    ...mapState(['orderList', 'userInfo'])
  },
  methods: {
    ...mapActions(['getOrder'])
  },
  store
};
</script>

<style scoped>
.page-size {
  margin: 15px 0px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
</style>
