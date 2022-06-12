<template>
  <div>
    <Table border ref="selection" :columns="columns" :data="shoppingCart" size="large" no-data-text="Le panier est vide"></Table>
    <div class="button">
      <div class="vider">
        <Button @click="vider" type="primary">Vider</Button>
      </div>
      <div class="go-to">
        <Button @click="goTo" type="primary">Payer</Button>
      </div>
    </div>
  </div>
</template>

<script>
import store from '@/vuex/store';
import { mapState, mapActions } from 'vuex';
export default {
  name: 'MyShoppingCart',
  data () {
    return {
      columns: [
        {
          type: 'Selection',
          width: 58,
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
        }
      ]
    };
  },
  created () {
    this.loadShoppingCart(this.userInfo.username);
  },
  computed: {
    ...mapState(['shoppingCart', 'userInfo'])
  },
  methods: {
    ...mapActions(['loadShoppingCart', 'addShoppingCart', 'deletePanier']),
    goTo () {
      this.$router.push('/order');
    },
    vider () {
      this.deletePanier(this.userInfo.username);
    }
  },
  store
};
</script>

<style scoped>
.button {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 200px;
  width: 100%;
}

.vider {
  margin: 15px;
  display: flex;
  justify-content: flex-start;
  background-color: grey;
  color: white;
}

.go-to {
  margin: 15px;
  display: flex;
  justify-content: flex-end;
}
</style>
