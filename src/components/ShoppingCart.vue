<template>
  <div>
    <Search></Search>
    <GoodsListNav></GoodsListNav>
    <!-- success hint -->
    <div class="add-info-box-container">
      <div class="add-info-box">
        <div class="add-info-detail">
          <div class="add-info-title">
            <p>
              <i class="fa fa-check-circle"></i> L’article a été ajouté avec succès au panier！</p>
          </div>
          <div class="add-info-box-row">
            <div class="add-info-img">
              <img :src="newShoppingCart.img" alt="">
            </div>
            <div class="add-info-intro">
              <p>{{newShoppingCart.title}}...</p>
              <p class="add-info-intro-detail">Marque：{{newShoppingCart.mark.name}} / Nombre：{{newShoppingCart.count}}</p>
            </div>
          </div>
        </div>
        <div class="car-btn-group">
          <div></div>
          <div class="car-btn-row">
            <router-link :to="{path:'/goodsDetail', query:{name: JSON.stringify(newShoppingCart.self)}}">
              <button class="btn-car btn-car-to-detail">Voir les détails du produit</button>
            </router-link>
            <router-link to="/home/myShoppingCart">
              <button class="btn-car btn-car-to-pay">Aller au panier pour vérifier > </button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="other-user-buy-box">
      <div class="other-user-buy-title">
        <p>Vous pouvez jeter un coup d’œil à d’autres produits d’ailleurs :)</p>
      </div>
      <div class="other-container">
        <div class="other-user-buy-row" v-for="(items,index1) in popularList" :key="index1">
          <div class="other-user-buy-item-img">
            <img :src="items.imgurl" alt="" class="other-img">
          </div>
          <div class="other-buy-detail-box">
            <div class="other-buy-title">
              <a href="item_detail.html">
                <p>{{items.name}}</p>
              </a>
            </div>
            <div class="other-buy-price">
              <p>{{items.price}}</p>
            </div>
            <div class="other-buy-btn-box">
              <router-link :to="{path:'/goodsDetail', query:{name: JSON.stringify(items)}}">
                <button class="other-buy-btn"><Icon type="ios-cart"></Icon> Ajouter au panier</button>
              </router-link>
            </div>
          </div>
          <div class="spliter"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Search from '@/components/Search';
import GoodsListNav from '@/components/nav/GoodsListNav';
import store from '@/vuex/store';
import { mapState, mapActions, mapMutations } from 'vuex';
export default {
  name: 'ShoppingCart',
  beforeRouteEnter (to, from, next) {
    window.scrollTo(0, 0);
    next();
  },
  created () {
    this.getPopularList();
  },
  computed: {
    ...mapState(['newShoppingCart', 'popularList'])
  },
  methods: {
    ...mapActions(['getPopularList']),
    ...mapMutations(['SET_POPULAR_LIST'])
  },
  components: {
    Search,
    GoodsListNav
  },
  store
};
</script>

<style scoped>
/****************************add to shoppingcart*****************************/
.add-info-box-container{
  width: 100%;
  background-color: #F5F5F5;
}
.add-info-box{
  width: 90%;
  margin: 0px auto;
  padding: 15px 0px;
  display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.add-info-detail{
  display: flex;
    flex-direction: column;
}
.add-info-title{
  font-size: 25px;
  color: #71b247;
}
.add-info-box-row{
  display: flex;
    flex-direction: row;
    margin-top: 15px;
}
.add-info-img{
  width: 56px;
  height: 56px;
  margin-right: 15px;
}
.add-info-img img{
  width: 100%;
}
.add-info-intro{
  display: flex;
    flex-direction: column;
    justify-content: center;
}
.add-info-intro-detail{
  font-size: 12px;
  color: #999999;
}
.car-btn-group{
  display: flex;
    flex-direction: column;
    justify-content: space-between;
}
/*按钮*/
.btn-car{
  padding: 8px 10px;
  font-size: 16px;
  border-radius: 0px;
  border:none;
  margin-right: 15px;
}
.btn-car-to-detail{
  background-color: #fff;
  color: #e4393c;
  border:1px solid #fff;
}
.btn-car-to-detail:hover{
border:1px solid #e4393c;
}
.btn-car-to-pay{
  background-color: #e4393c;
  color: #fff;
  border:1px solid #e4393c;
}
.btn-car-to-pay:hover{
  background-color: #c91623;
  border:1px solid #c91623;
}
/*其他用户购买*/
.other-user-buy-box{
  width: 90%;
  margin: 0px auto;
  display: flex;
    flex-direction: column;
}
.other-user-buy-title{
  margin-top: 25px;
  font-size: 14px;
  color: #666;
  font-weight: bold;
}
.other-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.other-user-buy-row{
  margin-top: 25px;
  margin-bottom: 50px;
  width: 150px;
  height: 300px;
  display: flex;
    flex-direction: column;
    justify-content: space-between;
  align-items: center;
}
.other-user-buy-item-box{
  display: flex;
    flex-direction: row;
}
.other-user-buy-item-img{
}
.other-img {
  height: 150px;
  width: 150px;
}
.other-user-buy-item-img img{
  width: 100%;
}
.other-buy-detail-box{
  width: 160px;
  margin-left: 15px;
  display: flex;
    flex-direction: column;
}
.other-buy-title{
  font-size: 12px;
}
.other-buy-title a{
  color: #2c2c2c;
  text-decoration: none;
}
.other-buy-price{
  font-size: 12px;
  font-weight: bold;
  color: #E4393C;
}
.other-buy-btn{
  padding: 3px 10px;
  color: #E4393C;
  font-size: 12px;
  border: 1px solid #E4393C;
  border-radius: 0px;
  background-color: #fff;
}
.other-buy-btn:hover{
  color: #c91623;
  border: 1px solid #c91623;
}
.spliter {
  background-color: grey;
  height: 1px;
}
/*********************************************************/
</style>
