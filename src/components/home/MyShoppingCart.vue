<template>
  <div>
    <Table border ref="selection" :columns="columns" :data="shoppingCart" size="large" no-data-text="Le panier est vide"></Table>
    <div class="go-to">
      <Button @click="goTo" type="primary">Payer</Button>
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
                }
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
          title: 'Menu',
          width: 198,
          key: 'package',
          align: 'center'
        },
        {
          title: 'Nombre',
          key: 'count',
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
    this.loadShoppingCart();
  },
  computed: {
    ...mapState(['shoppingCart'])
  },
  methods: {
    ...mapActions(['loadShoppingCart']),
    goTo () {
      this.$router.push('/order');
    }
  },
  store
};
</script>

<style scoped>
.go-to {
  margin: 15px;
  display: flex;
  justify-content: flex-end;
}
</style>
