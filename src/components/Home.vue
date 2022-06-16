<template>
  <div class="container">
    <Layout class="layout">
      <Sider class="side-bar" :style="{height: 'calc(100vh - 35px)', background: '#fff', overflow: 'auto'}" ref="side" :collapsed-width="78">
        <Menu active-name="1-2" theme="light" width="auto" @on-select="onSelect">
          <div class="user-icon">
            <div class="user-img">
              <img src="static/img/head.jpeg">
            </div>
            <p>{{ this.userInfo.username }}</p>
          </div>
          <Submenu name="1">
            <template slot="title">
                <Icon type="location"></Icon>
                <span>Adresse</span>
            </template>
            <MenuItem name="myAddress">Mon adresse</MenuItem>
            <MenuItem name="addAddress">Ajouter</MenuItem>
          </Submenu>
          <Submenu name="2">
            <template slot="title">
              <Icon type="clipboard"></Icon>
              <span>Ordre</span>
            </template>
            <MenuItem name="myOrder">Mon ordre</MenuItem>
          </Submenu>
          <Submenu name="3">
            <template slot="title">
                <Icon type="ios-cart"></Icon>
                <span>Panier</span>
            </template>
            <MenuItem name="myShoppingCart">Mon panier</MenuItem>
          </Submenu>
        </Menu>
      </Sider>
      <Layout class="layout">
        <Header :style="{background: '#fff'}">
          <h2>{{activeTitle}}</h2>
        </Header>
        <Content class="content">
          <transition mode="out-in">
            <router-view></router-view>
          </transition>
        </Content>
        <Footer class="layout-footer-center">2022 &copy; Yonghui & Chenfan</Footer>
      </Layout>
    </Layout>
  </div>
</template>

<script>
import store from '@/vuex/store';
import {mapState} from 'vuex';

export default {
  name: 'Home',
  computed: {
    ...mapState(['userInfo'])
  },
  data () {
    return {
      activeTitle: 'Mon ordre',
      bar: {
        'myAddress': 'Mon adresse',
        'addAddress': 'Ajouter',
        'myOrder': 'Mon ordre',
        'myShoppingCart': 'Mon panier'
      }
    };
  },
  methods: {
    onSelect (name) {
      this.activeTitle = this.bar[name];
      this.$router.push(`/home/${name}`);
    }
  },
  store
};
</script>

<style scoped>
.side-bar a{
  color: #232323;
}
.user-icon {
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.user-icon span {
  font-size: 96px;
}
.user-img {
  margin-bottom: 15px;
  width: 96px;
  height: 96px;
  border-radius: 48px;
  overflow: hidden;
}
.user-img img{
  width: 100%;
}
.content {
  margin: 15px;
  background-color: #fff;
  padding: 15px;
}
.layout-footer-center {
  padding: 0px 15px;
  padding-bottom: 15px;
  text-align: center;
}
</style>
