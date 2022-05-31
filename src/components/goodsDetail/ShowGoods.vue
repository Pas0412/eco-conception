<template>
  <div>
    <div class="item-detail-show">
      <div class="item-detail-left">
        <div class="item-detail-big-img">
          <img :src="this.item.imgurl" alt="">
        </div>
      </div>
      <div class="item-detail-right">
        <div class="item-detail-title">
          <p>{{this.item.name}}</p>
        </div>
        <div class="item-detail-price-row">
          <div class="item-price-left">
            <div class="item-price-row">
              <p>
                <span class="item-price-title">PRIX</span>
                <span class="item-price">{{this.item.price}}</span>
              </p>
            </div>
          </div>
          <div class="item-price-right">
            <div class="item-remarks-sum">
              <p>Rate</p>
              <p>
                <span class="item-remarks-num">{{this.item.rate}}</span>
              </p>
            </div>
          </div>
        </div>
        <!-- 选择颜色 -->
        <div class="item-select">
          <div class="item-select-title">
            <p>CHOISIR MARQUE</p>
          </div>
          <div class="item-select-column">
            <div class="item-select-row" v-for="(items, index) in goodsInfo.setMeal" :key="index">
              <div class="item-select-box" v-for="(item, index1) in items" :key="index1" @click="select(index, index1)" :class="{'item-select-box-active': ((index * 3) + index1) === selectBoxIndex}">
                <div class="item-select-img">
                  <img :src="item.img" alt="">
                </div>
                <div class="item-select-intro">
                  <p>{{item.intro}}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br>
        <div class="add-buy-car-box">
          <div class="add-buy-car">
            <InputNumber :min="1" v-model="count" size="large"></InputNumber>
            <Button type="error" size="large" @click="addShoppingCartBtn()">Ajouter au panier</Button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import store from '@/vuex/store';
import { mapState, mapActions } from 'vuex';
export default {
  name: 'ShowGoods',
  data () {
    return {
      price: 0,
      count: 1,
      selectBoxIndex: 0,
      imgIndex: 0
    };
  },
  props: ['item'],
  computed: {
    ...mapState(['goodsInfo'])
  },
  methods: {
    ...mapActions(['addShoppingCart']),
    select (index1, index2) {
      this.selectBoxIndex = index1 * 3 + index2;
      this.price = this.goodsInfo.setMeal[index1][index2].price;
    },
    addShoppingCartBtn () {
      const index1 = parseInt(this.selectBoxIndex / 3);
      const index2 = this.selectBoxIndex % 3;
      const date = new Date();
      const goodsId = date.getTime();
      const data = {
        goods_id: goodsId,
        title: this.item.name,
        count: this.count,
        package: this.goodsInfo.setMeal[index1][index2]
      };
      this.addShoppingCart(data);
      this.$router.push('/shoppingCart');
    }
  },
  mounted () {
    const father = this;
    setTimeout(() => {
      father.price = father.goodsInfo.setMeal[0][0].price || 0;
    }, 300);
  },
  store
};
</script>

<style scoped>
/******************商品图片及购买详情开始******************/
.item-detail-show {
  width: 80%;
  margin: 50px auto 200px;
  display: flex;
  flex-direction: row;
  background-color: #fff;
}
.item-detail-left {
  width: 350px;
  margin-right: 30px;
}
.item-detail-big-img {
  width: 350px;
  height: 350px;
  box-shadow: 0px 0px 8px #ccc;
  cursor: pointer;
}
.item-detail-big-img img {
  width: 100%;
}
.item-detail-img-row {
  margin-top: 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.item-detail-img-small {
  width: 68px;
  height: 68px;
  box-shadow: 0px 0px 8px #ccc;
  cursor: pointer;
}
.item-detail-img-small img {
  width: 100%;
}
/*商品选购详情*/
.item-detail-right {
  display: flex;
  flex-direction: column;
}
.item-detail-title p {
  color: #666;
  font-size: 20px;
}
.item-detail-express {
  font-size: 14px;
  padding: 2px 3px;
  border-radius: 3px;
  background-color: #e4393c;
  color: #fff;
}
/*商品标签*/
.item-detail-tag {
  font-size: 12px;
  color: #e4393c;
}
/*价格详情等*/
.item-detail-price-row {
  padding: 5px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #f3f3f3;
}
.item-price-left {
  display: flex;
  flex-direction: column;
}
.item-price-title {
  color: #999999;
  font-size: 14px;
  margin-right: 15px;
}
.item-price-row {
  margin: 5px 0px;
}
.item-price {
  color: #e4393c;
  font-size: 23px;
  cursor: pointer;
}
.item-price-full-cut {
  margin-right: 5px;
  padding: 3px;
  color: #e4393c;
  font-size: 12px;
  background-color: #ffdedf;
  border: 1px dotted #e4393c;
  cursor: pointer;
}
.item-remarks-sum {
  padding-left: 8px;
  border-left: 1px solid #ccc;
}
.item-remarks-sum p {
  color: #999999;
  font-size: 12px;
  line-height: 10px;
  text-align: center;
}
.item-remarks-num {
  line-height: 18px;
  color: #005eb7;
}
.item-select {
  display: flex;
  flex-direction: row;
  margin-top: 15px;
}
.item-select-title {
  color: #999999;
  font-size: 14px;
  margin-right: 15px;
}
.item-select-column {
  display: flex;
  flex-direction: column;
}
.item-select-row {
  display: flex;
  flex-direction: row;
  margin-bottom: 8px;
}
.item-select-box {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.item-select-img {
  width: 36px;
}
.item-select-box {
  padding: 5px;
  margin-right: 8px;
  background-color: #f7f7f7;
  border: 0.5px solid #ccc;
  cursor: pointer;
}
.item-select-box:hover {
  border: 0.5px solid #e3393c;
}
.item-select-box-active {
  border: 0.5px solid #e3393c;
}
.item-select-img img {
  width: 100%;
}
.item-select-intro p {
  margin: 0px;
  padding: 5px;
}
.item-select-class {
  padding: 5px;
  margin-right: 8px;
  background-color: #f7f7f7;
  border: 0.5px solid #ccc;
  cursor: pointer;
}
.item-select-class:hover {
  border: 0.5px solid #e3393c;
}
.add-buy-car-box {
  width: 100%;
  margin-top: 15px;
  border-top: 1px dotted #ccc;
}
.add-buy-car {
  margin-top: 15px;
}
/******************商品图片及购买详情结束******************/
</style>
