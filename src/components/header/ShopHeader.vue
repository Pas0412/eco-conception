<template>
  <div class="shop-box">
    <div class="shop-container">
      <div class="shop-title">
        <div class="shop-title-icon">
<!--          <Icon type="fireball"></Icon>-->
          <img src="@/asset/logo.png" class="shop-header-logo">
          <i class="fa fa-fire"></i>
        </div>
        <div class="shop-title-content">
          <p><router-link to="/merchant">{{ shopIntro.shopName }}</router-link></p>
          <p><router-link to="/merchant">{{ shopIntro.slogen }}</router-link></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShopHeader',
  data () {
    return {
      shopIntro: {
        shopName: 'Eco-conception',
        slogen: 'The Best Thing For You'
      }
    };
  }
};
</script>

<style scoped>
/* 店铺介绍 */
.shop-box {
  width: 100%;
  height: 120px;
  background-color: #484848;
}

.shop-header-logo {
  height: 80px;
  width: 80px;
  vertical-align: middle;
}

.shop-container {
  width: 80%;
  height: 100%;
  margin: 0px auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: #fff;
}

.shop-title {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-self: center;
}

.shop-title-icon {
  font-size: 46px;
}

.shop-title-content {
  margin-left: 15px;
  display: flex;
  flex-direction: column;
  align-self: center;
}

.shop-title-content p {
  font-size: 20px;
}

.shop-title-content a {
  color: #fff;
}

.shop-another-item {
  display: flex;
  flex-direction: row;
}

.shop-another-item-detail {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 15px;
}

.shop-another-item-img {
  height: 80px;
  border-radius: 40px;
  overflow: hidden;
}

.shop-another-item-img img {
  width: 80px;
}

.shop-anoter-item-intro {
  margin-left: 15px;
}
</style>
