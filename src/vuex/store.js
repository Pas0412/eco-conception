import Vue from 'vue';
import Vuex from 'vuex';
import * as actions from './actions';
import * as mutations from './mutations';
import * as getters from './getters';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoading: false, // loading animation
    userInfo: { // user info
      username: ''
    },
    signUpStep: 0,
    marketing: { // home page
      CarouselItems: [],
      activity: []
    },
    piecesList0: [],
    piecesList1: [],
    piecesList2: [],
    piecesList3: [],
    piecesList4: [],
    piecesList5: [],
    piecesList6: [],
    piecesList7: [],
    piecesList8: [],
    piecesList9: [],
    piecesList10: [],
    piecesList11: [],
    piecesList12: [],
    childType: [],
    popularList: [],
    mark: [],
    address: [],
    orderList: [],
    shoppingCart: [], // panier
    newShoppingCart: []
  },
  getters,
  actions,
  mutations
});
