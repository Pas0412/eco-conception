<template>
  <div>
    <Search></Search>
    <GoodsListNav></GoodsListNav>
    <div class="goods-list-container">
      <Alert show-icon class="tips-box">
        Conseils
        <Icon type="ios-lightbulb-outline" slot="icon"></Icon>
        <template slot="desc">Veuillez cliquer sur la case de sélection devant l’article, sélectionnez l’article dans votre panier, puis cliquez sur Payer.</template>
      </Alert>
      <Table border ref="selection" :columns="columns" :data="shoppingCart" size="large" @on-selection-change="select" no-data-text="Votre panier n’a pas d’articles, veuillez ajouter des articles à votre panier avant de cliquer sur Acheter"></Table>
      <div class="address-container">
        <h3>Info destinataire</h3>
        <div class="address-box">
          <div class="address-check">
            <div class="address-check-name">
              <span><Icon type="ios-checkmark-outline"></Icon> {{checkAddress.name}}</span>
            </div>
            <div class="address-detail">
              <p>{{checkAddress.address}}</p>
            </div>
          </div>
          <Collapse>
            <Panel>
                Choisir adresse
                <p slot="content">
                  <RadioGroup vertical size="large" @on-change="changeAddress">
                    <Radio :label="item.addressId" v-for="(item, index) in address" :key="index">
                      <span>{{item.name}} {{item.province}} {{item.city}} {{item.address}} {{item.phone}} {{item.postalcode}}</span>
                    </Radio>
                  </RadioGroup>
                </p>
            </Panel>
          </Collapse>
        </div>
      </div>
      <div class="remarks-container">
        <h3>Notes</h3>
        <i-input v-model="remarks" size="large" placeholder="Remplissez les notes ici" class="remarks-input"></i-input>
      </div>
      <div class="invoices-container">
        <h3>Informations sur la facture</h3>
        <p>Ce produit ne prend pas en charge la facturation</p>
      </div>
      <div class="pay-container">
        <div class="pay-box">
          <p><span>Soumettre le montant total dû à la commande：</span><span class="money">€{{totalPrice.toFixed(2)}}</span></p>
          <div class="pay-btn">
            <router-link to="/payDone"><Button type="error" size="large">Payer</Button></router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Search from '@/components/Search';
import GoodsListNav from '@/components/nav/GoodsListNav';
import store from '@/vuex/store';
import { mapState, mapActions } from 'vuex';
export default {
  name: 'Order',
  beforeRouteEnter (to, from, next) {
    window.scrollTo(0, 0);
    next();
  },
  created () {
    this.loadAddress();
    // TODO: load panier info from server
  },
  data () {
    return {
      goodsCheckList: [],
      columns: [
        {
          type: 'selection',
          width: 58,
          align: 'center'
        },
        {
          title: 'img',
          key: 'img',
          width: 86,
          render: (h, params) => {
            return h('div', [
              h('img', {
                attrs: {
                  src: params.row.img,
                  height: '40px',
                  width: '40px'
                }
              })
            ]);
          },
          align: 'center'
        },
        {
          title: 'titre',
          key: 'title',
          align: 'center'
        },
        {
          title: 'menu',
          width: 198,
          key: 'package',
          align: 'center'
        },
        {
          title: 'nombre',
          key: 'count',
          width: 98,
          align: 'center'
        },
        {
          title: 'prix',
          width: 88,
          key: 'price',
          align: 'center'
        }
      ],
      checkAddress: {
        name: 'pas de choix',
        address: 'choisir d\'adresse'
      },
      remarks: ''
    };
  },
  computed: {
    ...mapState(['address', 'shoppingCart']),
    totalPrice () {
      let price = 0.00;
      this.goodsCheckList.forEach(item => {
        console.log(item.price.match(/[0-9]*/)[0]);
        price += (parseInt(item.price.match(/[0-9]*/)) + parseInt(item.price.match(/..\s/)) / 100) * item.count;
      });
      return price;
    }
  },
  methods: {
    ...mapActions(['loadAddress']),
    select (selection, row) {
      console.log(selection);
      this.goodsCheckList = selection;
    },
    changeAddress (data) {
      const father = this;
      this.address.forEach(item => {
        if (item.addressId === data) {
          father.checkAddress.name = item.name;
          father.checkAddress.address = `${item.name} ${item.province} ${item.city} ${item.address} ${item.phone} ${item.postalcode}`;
        }
      });
    }
  },
  mounted () {
    setTimeout(() => {
      this.$refs.selection.selectAll(true);
    }, 500);
  },
  components: {
    Search,
    GoodsListNav
  },
  store
};
</script>

<style scoped>
.goods-list-container {
  margin: 15px auto;
  width: 80%;
}
.tips-box {
  margin-bottom: 15px;
}
.address-container {
  margin-top: 15px;
}
.address-box {
  margin-top: 15px;
  padding: 15px;
  border: 1px #ccc dotted;
}
.address-check {
  margin: 15px 0px;
  height: 36px;
  display: flex;
  align-items: center;
}
.address-check-name {
  width: 120px;
  display: flex;
  justify-content: center;
  align-content: center;
  background-color: #ccc;
}
.address-check-name span {
  width: 120px;
  height: 36px;
  font-size: 14px;
  line-height: 36px;
  text-align: center;
  color: #fff;
  background-color: #f90013;
}
.address-detail {
  padding-left: 15px;
  font-size: 14px;
  color: #999999;
}
.remarks-container {
  margin: 15px 0px;
}
.remarks-input {
  margin-top: 15px;
}
.invoices-container p{
  font-size: 12px;
  line-height: 30px;
  color: #999;
}
.pay-container {
  margin: 15px;
  display: flex;
  justify-content: flex-end;
}
.pay-box {
  font-size: 18px;
  font-weight: bolder;
  color: #495060;
}
.money {
  font-size: 26px;
  color: #f90013;
}
.pay-btn {
  margin: 15px 0px;
  display: flex;
  justify-content: flex-end;
}
</style>
