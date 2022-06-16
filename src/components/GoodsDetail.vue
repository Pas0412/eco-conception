<template>
  <div>
    <Search></Search>
    <ShopHeader></ShopHeader>
    <div class="shop-item-path">
      <div class="shop-nav-container">
        <Breadcrumb>
          <BreadcrumbItem to="/">ACCUEIL</BreadcrumbItem>
          <BreadcrumbItem to="/goodsList">GOODSLIST</BreadcrumbItem>
          <BreadcrumbItem>CURRENT</BreadcrumbItem>
        </Breadcrumb>
      </div>
    </div>
    <!-- showGoods -->
    <ShowGoods :item="this.getItem"></ShowGoods>
  </div>
</template>

<script>
import Search from '@/components/Search';
import ShopHeader from '@/components/header/ShopHeader';
import ShowGoods from '@/components/goodsDetail/ShowGoods';
import store from '@/vuex/store';
import { mapState } from 'vuex';

export default {
  name: 'GoodsDetail',
  beforeRouteEnter (to, from, next) {
    window.scrollTo(0, 0);
    next();
  },
  created () {
  },
  data () {
    return {
      tagsColor: [ 'blue', 'green', 'red', 'yellow' ],
      item: null
    };
  },
  methods: {
  },
  computed: {
    ...mapState(['isLoading']),
    getItem: function () {
      console.log(this.$route.query.name);
      return JSON.parse(this.$route.query.name);
    }
  },
  components: {
    Search,
    ShopHeader,
    ShowGoods
  },
  store
};
</script>

<style scoped>
.shop-item-path {
  height: 38px;
  background-color: rgb(236, 235, 235);
  line-height: 38px;
  color: #2c2c2c;
}
.shop-nav-container {
  margin: 0px auto;
  width: 80%;
}
</style>
