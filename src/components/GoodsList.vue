<template>
  <div>
    <Search></Search>
    <GoodsListNav></GoodsListNav>
    <div class="container">
      <div class="bread-crumb">
        <Breadcrumb>
          <BreadcrumbItem to="/">
            <Icon type="ios-home-outline"></Icon> Accueil
          </BreadcrumbItem>
          <BreadcrumbItem to="/goodsList?searchData=">
            <Icon type="bag"></Icon> {{searchItem}}
          </BreadcrumbItem>
        </Breadcrumb>
      </div>
      <!-- pieceTab -->
      <el-tabs v-model="activeName" type="border-card" @tab-click="handleClick" class="tab-container">
        <el-tab-pane label="Freinage" name="first">
          <!-- pieceType -->
          <GoodsClassNav :sType="childType[0]"></GoodsClassNav>
          <div class="goods-box">
            <div class="as-box">
              <div class="item-as-title">
                <span>Les plus populaire</span>
              </div>
              <div class="item-as" v-for="(item,index) in popularList" :key="index">
                <div class="item-as-img">
                  <img :src="item.imgurl" alt="" class="popular-img">
                </div>
                <div class="item-as-price">
              <span>
                <span class="seckill-price text-danger">{{item.price}}</span>
              </span>
                </div>
                <div class="item-as-intro">
                  <span>{{item.name}}</span>
                </div>
              </div>
            </div>
            <!-- POPULAR end -->
            <div class="goods-list-box">
              <div class="goods-list">
                <div class="goods-show-info" v-for="(item, index) in piecesList0" :key="index">
                  <div class="goods-show-img">
                    <router-link :to="{path:'/goodsDetail', query:{name: JSON.stringify(item)}}"><img class="piece-img" :src="item.imgurl"/></router-link>
                  </div>
                  <div class="goods-show-price">
                <span>
                  <span class="seckill-price text-danger">{{item.price}}</span>
                </span>
                  </div>
                  <div class="goods-show-detail">
                    <span>{{item.name}}</span>
                  </div>
                  <div class="goods-show-num">
                    <span>{{item.rate}}</span>
                  </div>
                  <div class="goods-show-seller">
                    <span>{{item.type2}}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="Filtration" name="second">
          <!-- pieceType -->
          <GoodsClassNav :sType="childType[1]"></GoodsClassNav>
          <div class="goods-box">
            <div class="as-box">
              <div class="item-as-title">
                <span>Les plus populaire</span>
              </div>
              <div class="item-as" v-for="(item,index) in popularList" :key="index">
                <div class="item-as-img">
                  <img :src="item.imgurl" alt="" class="popular-img">
                </div>
                <div class="item-as-price">
              <span>
                <span class="seckill-price text-danger">{{item.price}}</span>
              </span>
                </div>
                <div class="item-as-intro">
                  <span>{{item.name}}</span>
                </div>
              </div>
            </div>
            <!-- POPULAR end -->
            <div class="goods-list-box">
              <div class="goods-list">
                <div class="goods-show-info" v-for="(item, index) in piecesList1" :key="index">
                  <div class="goods-show-img">
                    <router-link :to="{path:'/goodsDetail', query:{name: JSON.stringify(item)}}"><img class="piece-img" :src="item.imgurl"/></router-link>
                  </div>
                  <div class="goods-show-price">
                <span>
                  <span class="seckill-price text-danger">{{item.price}}</span>
                </span>
                  </div>
                  <div class="goods-show-detail">
                    <span>{{item.name}}</span>
                  </div>
                  <div class="goods-show-num">
                    <span>{{item.rate}}</span>
                  </div>
                  <div class="goods-show-seller">
                    <span>{{item.type2}}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="Moteur" name="third">
          <!-- pieceType -->
          <GoodsClassNav :sType="childType[2]"></GoodsClassNav>
          <div class="goods-box">
            <div class="as-box">
              <div class="item-as-title">
                <span>Les plus populaire</span>
              </div>
              <div class="item-as" v-for="(item,index) in popularList" :key="index">
                <div class="item-as-img">
                  <img :src="item.imgurl" alt="" class="popular-img">
                </div>
                <div class="item-as-price">
              <span>
                <span class="seckill-price text-danger">{{item.price}}</span>
              </span>
                </div>
                <div class="item-as-intro">
                  <span>{{item.name}}</span>
                </div>
              </div>
            </div>
            <!-- POPULAR end -->
            <div class="goods-list-box">
              <div class="goods-list">
                <div class="goods-show-info" v-for="(item, index) in piecesList2" :key="index">
                  <div class="goods-show-img">
                    <router-link :to="{path:'/goodsDetail', query:{name: JSON.stringify(item)}}"><img class="piece-img" :src="item.imgurl"/></router-link>
                  </div>
                  <div class="goods-show-price">
                <span>
                  <span class="seckill-price text-danger">{{item.price}}</span>
                </span>
                  </div>
                  <div class="goods-show-detail">
                    <span>{{item.name}}</span>
                  </div>
                  <div class="goods-show-num">
                    <span>{{item.rate}}</span>
                  </div>
                  <div class="goods-show-seller">
                    <span>{{item.type2}}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="Embrayage, boite de vitesse, cardans" name="fourth">
          <!-- pieceType -->
          <GoodsClassNav :sType="childType[3]"></GoodsClassNav>
          <div class="goods-box">
            <div class="as-box">
              <div class="item-as-title">
                <span>Les plus populaire</span>
              </div>
              <div class="item-as" v-for="(item,index) in popularList" :key="index">
                <div class="item-as-img">
                  <img :src="item.imgurl" alt="" class="popular-img">
                </div>
                <div class="item-as-price">
              <span>
                <span class="seckill-price text-danger">{{item.price}}</span>
              </span>
                </div>
                <div class="item-as-intro">
                  <span>{{item.name}}</span>
                </div>
              </div>
            </div>
            <!-- POPULAR end -->
            <div class="goods-list-box">
              <div class="goods-list">
                <div class="goods-show-info" v-for="(item, index) in piecesList3" :key="index">
                  <div class="goods-show-img">
                    <router-link :to="{path:'/goodsDetail', query:{name: JSON.stringify(item)}}"><img class="piece-img" :src="item.imgurl"/></router-link>
                  </div>
                  <div class="goods-show-price">
                <span>
                  <span class="seckill-price text-danger">{{item.price}}</span>
                </span>
                  </div>
                  <div class="goods-show-detail">
                    <span>{{item.name}}</span>
                  </div>
                  <div class="goods-show-num">
                    <span>{{item.rate}}</span>
                  </div>
                  <div class="goods-show-seller">
                    <span>{{item.type2}}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="Demarrage et charge" name="fifth">
          <!-- pieceType -->
          <GoodsClassNav :sType="childType[4]"></GoodsClassNav>
          <div class="goods-box">
            <div class="as-box">
              <div class="item-as-title">
                <span>Les plus populaire</span>
              </div>
              <div class="item-as" v-for="(item,index) in popularList" :key="index">
                <div class="item-as-img">
                  <img :src="item.imgurl" alt="" class="popular-img">
                </div>
                <div class="item-as-price">
              <span>
                <span class="seckill-price text-danger">{{item.price}}</span>
              </span>
                </div>
                <div class="item-as-intro">
                  <span>{{item.name}}</span>
                </div>
              </div>
            </div>
            <!-- POPULAR end -->
            <div class="goods-list-box">
              <div class="goods-list">
                <div class="goods-show-info" v-for="(item, index) in piecesList4" :key="index">
                  <div class="goods-show-img">
                    <router-link :to="{path:'/goodsDetail', query:{name: JSON.stringify(item)}}"><img class="piece-img" :src="item.imgurl"/></router-link>
                  </div>
                  <div class="goods-show-price">
                <span>
                  <span class="seckill-price text-danger">{{item.price}}</span>
                </span>
                  </div>
                  <div class="goods-show-detail">
                    <span>{{item.name}}</span>
                  </div>
                  <div class="goods-show-num">
                    <span>{{item.rate}}</span>
                  </div>
                  <div class="goods-show-seller">
                    <span>{{item.type2}}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="Echappement" name="sixth">
          <!-- pieceType -->
          <GoodsClassNav :sType="childType[5]"></GoodsClassNav>
          <div class="goods-box">
            <div class="as-box">
              <div class="item-as-title">
                <span>Les plus populaire</span>
              </div>
              <div class="item-as" v-for="(item,index) in popularList" :key="index">
                <div class="item-as-img">
                  <img :src="item.imgurl" alt="" class="popular-img">
                </div>
                <div class="item-as-price">
              <span>
                <span class="seckill-price text-danger">{{item.price}}</span>
              </span>
                </div>
                <div class="item-as-intro">
                  <span>{{item.name}}</span>
                </div>
              </div>
            </div>
            <!-- POPULAR end -->
            <div class="goods-list-box">
              <div class="goods-list">
                <div class="goods-show-info" v-for="(item, index) in piecesList5" :key="index">
                  <div class="goods-show-img">
                    <router-link :to="{path:'/goodsDetail', query:{name: JSON.stringify(item)}}"><img class="piece-img" :src="item.imgurl"/></router-link>
                  </div>
                  <div class="goods-show-price">
                <span>
                  <span class="seckill-price text-danger">{{item.price}}</span>
                </span>
                  </div>
                  <div class="goods-show-detail">
                    <span>{{item.name}}</span>
                  </div>
                  <div class="goods-show-num">
                    <span>{{item.rate}}</span>
                  </div>
                  <div class="goods-show-seller">
                    <span>{{item.type2}}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="Direction / Suspension / Roulements" name="seventh">
          <!-- pieceType -->
          <GoodsClassNav :sType="childType[6]"></GoodsClassNav>
          <div class="goods-box">
            <div class="as-box">
              <div class="item-as-title">
                <span>Les plus populaire</span>
              </div>
              <div class="item-as" v-for="(item,index) in popularList" :key="index">
                <div class="item-as-img">
                  <img :src="item.imgurl" alt="" class="popular-img">
                </div>
                <div class="item-as-price">
              <span>
                <span class="seckill-price text-danger">{{item.price}}</span>
              </span>
                </div>
                <div class="item-as-intro">
                  <span>{{item.name}}</span>
                </div>
              </div>
            </div>
            <!-- POPULAR end -->
            <div class="goods-list-box">
              <div class="goods-list">
                <div class="goods-show-info" v-for="(item, index) in piecesList6" :key="index">
                  <div class="goods-show-img">
                    <router-link :to="{path:'/goodsDetail', query:{name: JSON.stringify(item)}}"><img class="piece-img" :src="item.imgurl"/></router-link>
                  </div>
                  <div class="goods-show-price">
                <span>
                  <span class="seckill-price text-danger">{{item.price}}</span>
                </span>
                  </div>
                  <div class="goods-show-detail">
                    <span>{{item.name}}</span>
                  </div>
                  <div class="goods-show-num">
                    <span>{{item.rate}}</span>
                  </div>
                  <div class="goods-show-seller">
                    <span>{{item.type2}}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="Visibilite" name="eighth">
          <!-- pieceType -->
          <GoodsClassNav :sType="childType[7]"></GoodsClassNav>
          <div class="goods-box">
            <div class="as-box">
              <div class="item-as-title">
                <span>Les plus populaire</span>
              </div>
              <div class="item-as" v-for="(item,index) in popularList" :key="index">
                <div class="item-as-img">
                  <img :src="item.imgurl" alt="" class="popular-img">
                </div>
                <div class="item-as-price">
              <span>
                <span class="seckill-price text-danger">{{item.price}}</span>
              </span>
                </div>
                <div class="item-as-intro">
                  <span>{{item.name}}</span>
                </div>
              </div>
            </div>
            <!-- POPULAR end -->
            <div class="goods-list-box">
              <div class="goods-list">
                <div class="goods-show-info" v-for="(item, index) in piecesList7" :key="index">
                  <div class="goods-show-img">
                    <router-link :to="{path:'/goodsDetail', query:{name: JSON.stringify(item)}}"><img class="piece-img" :src="item.imgurl"/></router-link>
                  </div>
                  <div class="goods-show-price">
                <span>
                  <span class="seckill-price text-danger">{{item.price}}</span>
                </span>
                  </div>
                  <div class="goods-show-detail">
                    <span>{{item.name}}</span>
                  </div>
                  <div class="goods-show-num">
                    <span>{{item.rate}}</span>
                  </div>
                  <div class="goods-show-seller">
                    <span>{{item.type2}}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="Chauffage et climatisation" name="ninth">
          <!-- pieceType -->
          <GoodsClassNav :sType="childType[8]"></GoodsClassNav>
          <div class="goods-box">
            <div class="as-box">
              <div class="item-as-title">
                <span>Les plus populaire</span>
              </div>
              <div class="item-as" v-for="(item,index) in popularList" :key="index">
                <div class="item-as-img">
                  <img :src="item.imgurl" alt="" class="popular-img">
                </div>
                <div class="item-as-price">
              <span>
                <span class="seckill-price text-danger">{{item.price}}</span>
              </span>
                </div>
                <div class="item-as-intro">
                  <span>{{item.name}}</span>
                </div>
              </div>
            </div>
            <!-- POPULAR end -->
            <div class="goods-list-box">
              <div class="goods-list">
                <div class="goods-show-info" v-for="(item, index) in piecesList8" :key="index">
                  <div class="goods-show-img">
                    <router-link :to="{path:'/goodsDetail', query:{name: JSON.stringify(item)}}"><img class="piece-img" :src="item.imgurl"/></router-link>
                  </div>
                  <div class="goods-show-price">
                <span>
                  <span class="seckill-price text-danger">{{item.price}}</span>
                </span>
                  </div>
                  <div class="goods-show-detail">
                    <span>{{item.name}}</span>
                  </div>
                  <div class="goods-show-num">
                    <span>{{item.rate}}</span>
                  </div>
                  <div class="goods-show-seller">
                    <span>{{item.type2}}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="Habitacle" name="tenth">
          <!-- pieceType -->
          <GoodsClassNav :sType="childType[9]"></GoodsClassNav>
          <div class="goods-box">
            <div class="as-box">
              <div class="item-as-title">
                <span>Les plus populaire</span>
              </div>
              <div class="item-as" v-for="(item,index) in popularList" :key="index">
                <div class="item-as-img">
                  <img :src="item.imgurl" alt="" class="popular-img">
                </div>
                <div class="item-as-price">
              <span>
                <span class="seckill-price text-danger">{{item.price}}</span>
              </span>
                </div>
                <div class="item-as-intro">
                  <span>{{item.name}}</span>
                </div>
              </div>
            </div>
            <!-- POPULAR end -->
            <div class="goods-list-box">
              <div class="goods-list">
                <div class="goods-show-info" v-for="(item, index) in piecesList9" :key="index">
                  <div class="goods-show-img">
                    <router-link :to="{path:'/goodsDetail', query:{name: JSON.stringify(item)}}"><img class="piece-img" :src="item.imgurl"/></router-link>
                  </div>
                  <div class="goods-show-price">
                <span>
                  <span class="seckill-price text-danger">{{item.price}}</span>
                </span>
                  </div>
                  <div class="goods-show-detail">
                    <span>{{item.name}}</span>
                  </div>
                  <div class="goods-show-num">
                    <span>{{item.rate}}</span>
                  </div>
                  <div class="goods-show-seller">
                    <span>{{item.type2}}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="Accessoires et portage" name="eleventh">
          <!-- pieceType -->
          <GoodsClassNav :sType="childType[10]"></GoodsClassNav>
          <div class="goods-box">
            <div class="as-box">
              <div class="item-as-title">
                <span>Les plus populaire</span>
              </div>
              <div class="item-as" v-for="(item,index) in popularList" :key="index">
                <div class="item-as-img">
                  <img :src="item.imgurl" alt="" class="popular-img">
                </div>
                <div class="item-as-price">
              <span>
                <span class="seckill-price text-danger">{{item.price}}</span>
              </span>
                </div>
                <div class="item-as-intro">
                  <span>{{item.name}}</span>
                </div>
              </div>
            </div>
            <!-- POPULAR end -->
            <div class="goods-list-box">
              <div class="goods-list">
                <div class="goods-show-info" v-for="(item, index) in piecesList10" :key="index">
                  <div class="goods-show-img">
                    <router-link :to="{path:'/goodsDetail', query:{name: JSON.stringify(item)}}"><img class="piece-img" :src="item.imgurl"/></router-link>
                  </div>
                  <div class="goods-show-price">
                <span>
                  <span class="seckill-price text-danger">{{item.price}}</span>
                </span>
                  </div>
                  <div class="goods-show-detail">
                    <span>{{item.name}}</span>
                  </div>
                  <div class="goods-show-num">
                    <span>{{item.rate}}</span>
                  </div>
                  <div class="goods-show-seller">
                    <span>{{item.type2}}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="Jantes & roues" name="twelfth">
          <!-- pieceType -->
          <GoodsClassNav :sType="childType[11]"></GoodsClassNav>
          <div class="goods-box">
            <div class="as-box">
              <div class="item-as-title">
                <span>Les plus populaire</span>
              </div>
              <div class="item-as" v-for="(item,index) in popularList" :key="index">
                <div class="item-as-img">
                  <img :src="item.imgurl" alt="" class="popular-img">
                </div>
                <div class="item-as-price">
              <span>
                <span class="seckill-price text-danger">{{item.price}}</span>
              </span>
                </div>
                <div class="item-as-intro">
                  <span>{{item.name}}</span>
                </div>
              </div>
            </div>
            <!-- POPULAR end -->
            <div class="goods-list-box">
              <div class="goods-list">
                <div class="goods-show-info" v-for="(item, index) in piecesList11" :key="index">
                  <div class="goods-show-img">
                    <router-link :to="{path:'/goodsDetail', query:{name: JSON.stringify(item)}}"><img class="piece-img" :src="item.imgurl"/></router-link>
                  </div>
                  <div class="goods-show-price">
                <span>
                  <span class="seckill-price text-danger">{{item.price}}</span>
                </span>
                  </div>
                  <div class="goods-show-detail">
                    <span>{{item.name}}</span>
                  </div>
                  <div class="goods-show-num">
                    <span>{{item.rate}}</span>
                  </div>
                  <div class="goods-show-seller">
                    <span>{{item.type2}}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="Carrosserie" name="thirteenth">
          <!-- POPULAR -->
          <GoodsClassNav :sType="childType[12]"></GoodsClassNav>
          <div class="goods-box">
            <div class="as-box">
              <div class="item-as-title">
                <span>Les plus populaire</span>
              </div>
              <div class="item-as" v-for="(item,index) in popularList" :key="index">
                <div class="item-as-img">
                  <img :src="item.imgurl" alt="" class="popular-img">
                </div>
                <div class="item-as-price">
              <span>
                <span class="seckill-price text-danger">{{item.price}}</span>
              </span>
                </div>
                <div class="item-as-intro">
                  <span>{{item.name}}</span>
                </div>
              </div>
            </div>
            <!-- POPULAR end -->
            <div class="goods-list-box">
              <div class="goods-list">
                <div class="goods-show-info" v-for="(item, index) in piecesList12" :key="index">
                  <div class="goods-show-img">
                    <router-link :to="{path:'/goodsDetail', query:{name: JSON.stringify(item)}}"><img class="piece-img" :src="item.imgurl"/></router-link>
                  </div>
                  <div class="goods-show-price">
                <span>
                  <span class="seckill-price text-danger">{{item.price}}</span>
                </span>
                  </div>
                  <div class="goods-show-detail">
                    <span>{{item.name}}</span>
                  </div>
                  <div class="goods-show-num">
                    <span>{{item.rate}}</span>
                  </div>
                  <div class="goods-show-seller">
                    <span>{{item.type2}}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
      <div class="goods-page">
        <Page :total="100" show-sizer></Page>
      </div>
    </div>
    <Spin size="large" fix v-if="isLoading"></Spin>
  </div>
</template>

<script>
import Search from '@/components/Search';
import GoodsListNav from '@/components/nav/GoodsListNav';
import GoodsClassNav from '@/components/nav/GoodsClassNav';
import store from '@/vuex/store';
import { mapState, mapActions, mapMutations } from 'vuex';

export default {
  name: 'GoodsList',
  beforeRouteEnter (to, from, next) {
    window.scrollTo(0, 0);
    next();
  },
  data () {
    return {
      activeName: 'first',
      searchItem: ''
    };
  },
  computed: {
    ...mapState(['asItems', 'isLoading', 'childType', 'piecesList0',
      'piecesList1', 'piecesList2', 'piecesList3', 'piecesList4',
      'piecesList5', 'piecesList6', 'piecesList7', 'piecesList8',
      'piecesList9', 'piecesList10', 'piecesList11', 'piecesList12',
      'popularList'])
  },
  methods: {
    ...mapActions(['getChildType', 'getPieces0',
      'getPieces1', 'getPieces2', 'getPieces3', 'getPieces4',
      'getPieces5', 'getPieces6', 'getPieces7', 'getPieces8',
      'getPieces9', 'getPieces10', 'getPieces11', 'getPieces12',
      'getPopularList']),
    ...mapMutations(['SET_GOODS_ORDER_BY', 'SET_CHILDTYPE', 'SET_PIECES_0',
      'SET_PIECES_1', 'SET_PIECES_2', 'SET_PIECES_3', 'SET_PIECES_4',
      'SET_PIECES_5', 'SET_PIECES_6', 'SET_PIECES_7', 'SET_PIECES_8',
      'SET_PIECES_9', 'SET_PIECES_10', 'SET_PIECES_11', 'SET_PIECES_12',
      'SET_POPULAR_LIST']),
    init () {
      let p = this.$route.query;
      if (Object.keys(p).length) {
        this.activeName = p.params;
      }
    },
    handleClick (tab, event) {
      console.log(tab, event);
    }
  },
  created () {
    this.getChildType();
    this.getPieces0();
    this.getPieces1();
    this.getPieces2();
    this.getPieces3();
    this.getPieces4();
    this.getPieces5();
    this.getPieces6();
    this.getPieces7();
    this.getPieces8();
    this.getPieces9();
    this.getPieces10();
    this.getPieces11();
    this.getPieces12();
    this.getPopularList();
    this.init();
  },
  mounted () {
    this.searchItem = this.$route.query.searchData;
  },
  components: {
    Search,
    GoodsListNav,
    GoodsClassNav
  },
  store
};
</script>

<style scoped>
.container {
  margin: 15px auto;
  width: 93%;
  min-width: 1000px;
}
.text-danger {
  color: #A94442;
}
.seckill-price{
  margin-right: 5px;
  font-size: 25px;
  font-weight: bold;
}
.goods-box {
  display: flex;
  margin-top: 50px;
}
.tab-container {
  margin-top: 30px;
}
/* ---------------POPULAR------------------- */
.as-box {
  width: 200px;
  border: 1px solid #ccc;
}
.item-as-title{
  width: 100%;
  height: 36px;
  color: #B1191A;
  line-height: 36px;
  font-size: 18px;
}
.item-as-title span:first-child{
  margin-left: 20px;
}
.item-as{
  width: 160px;
  margin: 18px auto;
}
.item-as-img{
  width: 160px;
  height: 160px;
  margin: 0px auto;
}
.item-as-price span{
  font-size: 18px;
}
.item-as-intro{
  margin-top: 5px;
  font-size: 12px;
}
.item-as-selled{
  margin-top: 5px;
  font-size: 12px;
}
.item-as-selled span{
  color: #005AA0;
}
/* ---------------POPULAR------------------- */

/* ---------------GOODSLIST------------------- */
.piece-img {
  height: 220px;
  width: 220px;
}
.popular-img {
  height: 150px;
  width: 150px;
}
.goods-list-box {
  margin-left: 15px;
  width: calc(100% - 215px);
}
.goods-list-tool{
  width: 100%;
  height: 38px;
  border: 1px solid #ccc;
  background-color: #F1F1F1;
}
.goods-list-tool ul{
  padding-left: 15px;
  list-style: none;
}
.goods-list-tool li{
  cursor: pointer;
  float: left;
}
.goods-list-tool span{
  padding: 5px 8px;
  border: 1px solid #ccc;
  border-left: none;
  line-height: 36px;
  background-color: #fff;
}
.goods-list-tool span:hover{
  border: 1px solid #E4393C;
}
.goods-list-tool i:hover{
  color: #E4393C;
}
.goods-list-tool-active {
  color: #fff;
  border-left: 1px solid #ccc;
  background-color: #E4393C !important;
}

.goods-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.goods-show-info{
  width: 240px;
  padding: 10px;
  margin: 15px 0px;
  border: 1px solid #fff;
  cursor: pointer;
}
.goods-show-info:hover{
  border: 1px solid #ccc;
  box-shadow: 0px 0px 15px #ccc;
}
.goods-show-price{
  margin-top: 6px;
}
.goods-show-detail{
  font-size: 12px;
  margin: 6px 0px;
}
.goods-show-num{
  font-size: 12px;
  margin-bottom: 6px;
  color: #009688;
}
.goods-show-num span{
  color: #005AA0;
  font-weight: bold;
}
.goods-show-seller{
  font-size: 12px;
  color:#E4393C;
}
.goods-page {
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;
}
/* ---------------GOODSLIST------------------- */
</style>
