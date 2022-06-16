<template>
  <div>
    <div class="nav-body">
      <!-- nav-side -->
      <div class="nav-side" ref="navSide">
        <div class="nav-side-ul">
          <li @mouseenter="showDetail(1)" @mouseleave="hideDetail(1)" @click="handleClick('first')">
            <span class="nav-side-item">Freinage</span>
          </li>
          <div class="spliter"></div>
          <li @mouseenter="showDetail(2)" @mouseleave="hideDetail(2)" @click="handleClick('second')">
            <span class="nav-side-item">Filtration</span>
          </li>
          <div class="spliter"></div>
          <li @mouseenter="showDetail(1)" @mouseleave="hideDetail(1)" @click="handleClick('third')">
            <span class="nav-side-item">Moteur</span>
          </li>
          <div class="spliter"></div>
          <li @mouseenter="showDetail(2)" @mouseleave="hideDetail(2)" @click="handleClick('fourth')">
            <span class="nav-side-item">Embrayage, boite de vitesse, cardans</span>
          </li>
          <div class="spliter"></div>
          <li @mouseenter="showDetail(1)" @mouseleave="hideDetail(1)" @click="handleClick('fifth')">
            <span class="nav-side-item">Demarrage et charge</span>
          </li>
          <div class="spliter"></div>
          <li @mouseenter="showDetail(2)" @mouseleave="hideDetail(2)" @click="handleClick('sixth')">
            <span class="nav-side-item">Echappement</span>
          </li>
          <div class="spliter"></div>
          <li @mouseenter="showDetail(1)" @mouseleave="hideDetail(1)" @click="handleClick('seventh')">
            <span class="nav-side-item">Direction / Suspension / Roulements</span>
          </li>
          <div class="spliter"></div>
          <li @mouseenter="showDetail(2)" @mouseleave="hideDetail(2)" @click="handleClick('eighth')">
            <span class="nav-side-item">Visibilite</span>
          </li>
          <div class="spliter"></div>
          <li @mouseenter="showDetail(1)" @mouseleave="hideDetail(1)" @click="handleClick('ninth')">
            <span class="nav-side-item">Chauffage et climatisation</span>
          </li>
          <div class="spliter"></div>
          <li @mouseenter="showDetail(1)" @mouseleave="hideDetail(1)" @click="handleClick('tenth')">
            <span class="nav-side-item">Habitacle</span>
          </li>
          <div class="spliter"></div>
          <li @mouseenter="showDetail(1)" @mouseleave="hideDetail(1)" @click="handleClick('eleventh')">
            <span class="nav-side-item">Accessoires et portage</span>
          </li>
          <div class="spliter"></div>
          <li @mouseenter="showDetail(1)" @mouseleave="hideDetail(1)" @click="handleClick('twelfth')">
            <span class="nav-side-item">Jantes & roues</span>
          </li>
          <div class="spliter"></div>
          <li @mouseenter="showDetail(1)" @mouseleave="hideDetail(1)" @click="handleClick('thirteenth')">
            <span class="nav-side-item">Carrosserie</span>
          </li>
        </div>
      </div>
      <div class="nav-content">
        <!-- carousel -->
        <div>
          <Carousel autoplay loop>
              <CarouselItem  v-for="(item, index) in marketing.CarouselItems" :key="index">
                <router-link to="/goodsList">
                  <img :src="item">
                </router-link>
              </CarouselItem>
          </Carousel>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import store from '@/vuex/store';
import { mapState } from 'vuex';
export default {
  name: 'HomeNav',
  data () {
    return {
    };
  },
  computed: {
    ...mapState(['marketing'])
  },
  methods: {
    handleClick (token) {
      this.$router.push({
        path: '/goodsList',
        query: {params: token}
      });
    },
    showDetail (index) {
      index === 1 ? (this.panel1 = true) : (this.panel2 = true);
    },
    hideDetail (index) {
      index === 1 ? (this.panel1 = false) : (this.panel2 = false);
    }
  },
  mounted () {
  },
  updated () {
  },
  store
};
</script>

<style scoped>
/*大的导航信息，包含导航，幻灯片等*/
.nav-body {
  width: 1320px;
  height: 685px;
  margin: 0px auto;
}
.nav-side {
  width: 200px;
  height: 100%;
  padding: 0px;
  color: #fff;
  float: left;
  background-color: #6e6568;
  display: flex;
  justify-content: space-between;
}
.nav-side-ul {
  height: 100%;
  width: 100%;
  padding: 0px;
  list-style: none;
  display: flex;
  justify-content: center;
  align-self: center;
  flex-direction: column;
}
.nav-side li {
  padding: 7.5px;
  padding-left: 15px;
  font-size: 14px;
  line-height: 18px;
}
.nav-side li:hover {
  background: #999395;
}
.nav-side-item:hover {
  cursor: pointer;
  color: #c81623;
}
.spliter {
  height: 1px;
  width: 100%;
  background-color: #999395;
  margin-top: 7px;
  margin-bottom: 7px;
}
/*导航内容*/
.nav-content {
  width: 1092px;
  margin-left: 15px;
  overflow: hidden;
  float: left;
}
</style>
