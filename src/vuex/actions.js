import axios from 'axios';
// 获取秒杀数据
export const loadSeckillsInfo = ({ commit }) => {
  return new Promise((resolve, reject) => {
    const data = [
      {
        intro: '【赠小风扇】维他 柠檬茶250ml*32盒 礼品装 整箱',
        img: 'static/img/index/seckill/seckill-item1.jpg',
        price: 71.9,
        realPrice: 89.6
      },
      {
        intro: 'Kindle Paperwhite 全新升级版6英寸护眼非反光电子墨水',
        img: 'static/img/index/seckill/seckill-item2.jpg',
        price: 989.0,
        realPrice: 1299.0
      },
      {
        intro: '粮悦 大吃兄糯米锅巴 安徽特产锅巴糯米原味400g*2盒',
        img: 'static/img/index/seckill/seckill-item3.jpg',
        price: 21.8,
        realPrice: 49.0
      },
      {
        intro: '【京东超市】清风（APP）抽纸 原木纯品金装系列 3层',
        img: 'static/img/index/seckill/seckill-item4.jpg',
        price: 49.9,
        realPrice: 59.0
      },
      {
        intro: 'NIKE耐克 男子休闲鞋 AIR MAX 90 ESSENTIAL 气垫',
        img: 'static/img/index/seckill/seckill-item5.jpg',
        price: 559.9,
        realPrice: 759.9
      }
    ];
    const date = new Date();
    const hours = date.getHours();
    const minute = date.getMinutes();
    const seconds = date.getSeconds();
    console.log([hours, minute, seconds]);
    // 距离开始秒杀时间
    const deadline = {
      hours: 1,
      minute: 38,
      seconds: 36
    };
    commit('SET_SECKILLS_INFO', [data, deadline]);
  });
};

// 获取轮播(营销)图片
export const loadCarouselItems = ({ commit }) => {
  return new Promise((resolve, reject) => {
    const data = {
      carouselItems: [
        'static/img/nav/1.png',
        'static/img/nav/2.png',
        'static/img/nav/3.png',
        'static/img/nav/4.png'
      ],
      activity: [
        'static/img/nav/nav_showimg1.jpg',
        'static/img/nav/nav_showimg2.jpg'
      ]
    };
    commit('SET_CAROUSELITEMS_INFO', data);
  });
};

export const getPieces0 = ({ commit }) => {
  return new Promise((resolve, reject) => {
    let pieces;
    axios.get('http://localhost:8084/queryAllPieceByType?type1=Freinage').then(response => {
      pieces = response.data;
      commit('SET_PIECES_0', pieces);
    }).catch(error => console.log(error));
  });
};

export const getPieces1 = ({ commit }) => {
  return new Promise((resolve, reject) => {
    let pieces;
    axios.get('http://localhost:8084/queryAllPieceByType?type1=Filtration').then(response => {
      pieces = response.data;
      commit('SET_PIECES_1', pieces);
    }).catch(error => console.log(error));
  });
};

export const getPieces2 = ({ commit }) => {
  return new Promise((resolve, reject) => {
    let pieces;
    axios.get('http://localhost:8084/queryAllPieceByType?type1=Moteur').then(response => {
      pieces = response.data;
      commit('SET_PIECES_2', pieces);
    }).catch(error => console.log(error));
  });
};

export const getPieces3 = ({ commit }) => {
  return new Promise((resolve, reject) => {
    let pieces;
    axios.get('http://localhost:8084/queryAllPieceByType?type1=Embrayage, boite de vitesse, cardans').then(response => {
      pieces = response.data;
      commit('SET_PIECES_3', pieces);
    }).catch(error => console.log(error));
  });
};

export const getPieces4 = ({ commit }) => {
  return new Promise((resolve, reject) => {
    let pieces;
    axios.get('http://localhost:8084/queryAllPieceByType?type1=Demarrage et charge').then(response => {
      pieces = response.data;
      commit('SET_PIECES_4', pieces);
    }).catch(error => console.log(error));
  });
};

export const getPieces5 = ({ commit }) => {
  return new Promise((resolve, reject) => {
    let pieces;
    axios.get('http://localhost:8084/queryAllPieceByType?type1=Echappement').then(response => {
      pieces = response.data;
      commit('SET_PIECES_5', pieces);
    }).catch(error => console.log(error));
  });
};

export const getPieces6 = ({ commit }) => {
  return new Promise((resolve, reject) => {
    let pieces;
    axios.get('http://localhost:8084/queryAllPieceByType?type1=Direction / Suspension / Roulements').then(response => {
      pieces = response.data;
      commit('SET_PIECES_6', pieces);
    }).catch(error => console.log(error));
  });
};

export const getPieces7 = ({ commit }) => {
  return new Promise((resolve, reject) => {
    let pieces;
    axios.get('http://localhost:8084/queryAllPieceByType?type1=Visibilite').then(response => {
      pieces = response.data;
      commit('SET_PIECES_7', pieces);
    }).catch(error => console.log(error));
  });
};

export const getPieces8 = ({ commit }) => {
  return new Promise((resolve, reject) => {
    let pieces;
    axios.get('http://localhost:8084/queryAllPieceByType?type1=Chauffage et climatisation').then(response => {
      pieces = response.data;
      commit('SET_PIECES_8', pieces);
    }).catch(error => console.log(error));
  });
};

export const getPieces9 = ({ commit }) => {
  return new Promise((resolve, reject) => {
    let pieces;
    axios.get('http://localhost:8084/queryAllPieceByType?type1=Habitacle').then(response => {
      pieces = response.data;
      commit('SET_PIECES_9', pieces);
    }).catch(error => console.log(error));
  });
};

export const getPieces10 = ({ commit }) => {
  return new Promise((resolve, reject) => {
    let pieces;
    axios.get('http://localhost:8084/queryAllPieceByType?type1=Accessoires et portage').then(response => {
      pieces = response.data;
      commit('SET_PIECES_10', pieces);
    }).catch(error => console.log(error));
  });
};

export const getPieces11 = ({ commit }) => {
  return new Promise((resolve, reject) => {
    let pieces;
    axios.get('http://localhost:8084/queryAllPieceByType?type1=Jantes %26 roues').then(response => {
      pieces = response.data;
      commit('SET_PIECES_11', pieces);
    }).catch(error => console.log(error));
  });
};

export const getPieces12 = ({ commit }) => {
  return new Promise((resolve, reject) => {
    let pieces;
    axios.get('http://localhost:8084/queryAllPieceByType?type1=Carrosserie').then(response => {
      pieces = response.data;
      commit('SET_PIECES_12', pieces);
    }).catch(error => console.log(error));
  });
};

export const getPopularList = ({ commit }) => {
  return new Promise((resolve, reject) => {
    let popular;
    axios.get('http://localhost:8084/queryHighestRatePiece').then(response => {
      popular = response.data;
      commit('SET_POPULAR_LIST', popular);
    }).catch(error => console.log(error));
  });
};

export const getChildType = ({ commit }) => {
  return new Promise((resolve, reject) => {
    const data = [
      ['Plaquettes de frein', 'Disque de frein', 'Etrier de frein', 'Freins à tambours et Kit arriere'],
      ['Filtre a  huile', 'Filtre a air', 'Filtre a carburant', 'Filtre d\'habitacle'],
      ['Distribution', 'Courroies', 'Refroidissement', 'Injection'],
      ['Kit d\'embrayage', 'Kit d\'embrayage + volant moteur', 'Volant moteur', 'Pieces d\'embrayage'],
      ['Allumage', 'Prechauffage', 'Alternateur', 'Batterie'],
      ['Echappement,Silencieux,catalyseur,intermédiare', 'Vanne EGR et autre capteur d\'échappement', 'Filtre a particules - FAP', 'Sonde lambda'],
      ['Amortisseur', 'Direction', 'Pieces de suspension', 'Roulemnt / moyeu / roue'],
      ['Optique / phare / feu', 'Balai d\'essuie-glace', 'Pieces d\'essuie glace', 'Ampoules'],
      ['Climatisation', 'Chauffage'],
      ['Leve vitre', 'Pedalier', 'Centrale clignotante', 'Commandes/Comodo'],
      ['Parctronic', 'Kit de câbles,parctronic', 'Attelage', 'Equipement Audio/Alarme'],
      ['Kit de réparation,palpeur des roues', 'Ecrou / Boulon de roue', 'Piston de butée,Jante'],
      ['Retroviseur exterieurs', 'Verins ouvertures', 'Serrures/fermetures', 'Retroviseurs interieurs']
    ];
    commit('SET_CHILDTYPE', data);
  });
};

// 加载电脑专栏数据
export const loadComputer = ({ commit }) => {
  return new Promise((resolve, reject) => {
    const computer = {
      title: '电脑数码',
      link: [ '电脑馆', '游戏极品', '装机大师', '职场焕新', '女神频道', '虚拟现实', '二合一平板', '电子教育', '万物周刊' ],
      detail: [
        {
          bigImg: 'static/img/index/computer/item-computer-1.jpg',
          itemFour: [
            {
              title: '电脑馆',
              intro: '笔记本999元限量秒！',
              img: 'static/img/index/computer/item-computer-2.jpg'
            },
            {
              title: '外设装备',
              intro: '1000减618',
              img: 'static/img/index/computer/item-computer-1-3.jpg'
            },
            {
              title: '电脑配件',
              intro: '联合满减最高省618',
              img: 'static/img/index/computer/item-computer-1-4.jpg'
            },
            {
              title: '办公生活',
              intro: '5折神券 精品文具',
              img: 'static/img/index/computer/item-computer-1-5.jpg'
            }
          ],
          itemContent: [
            'static/img/index/computer/item-computer-1-6.jpg',
            'static/img/index/computer/item-computer-1-7.jpg',
            'static/img/index/computer/item-computer-1-8.jpg'
          ]
        },
        {
          bigImg: 'static/img/index/computer/item-computer-2-1.jpg',
          itemFour: [
            {
              title: '平板电脑',
              intro: '爆款平板12期免息',
              img: 'static/img/index/computer/item-computer-2-2.jpg'
            },
            {
              title: '智能酷玩',
              intro: '抢999减666神券',
              img: 'static/img/index/computer/item-computer-2-3.jpg'
            },
            {
              title: '娱乐影音',
              intro: '大牌耳机低至5折',
              img: 'static/img/index/computer/item-computer-2-4.jpg'
            },
            {
              title: '摄影摄像',
              intro: '大牌相机5折抢',
              img: 'static/img/index/computer/item-computer-2-5.jpg'
            }
          ],
          itemContent: [
            'static/img/index/computer/item-computer-2-6.jpg',
            'static/img/index/computer/item-computer-2-7.jpg',
            'static/img/index/computer/item-computer-2-8.jpg'
          ]
        }
      ]
    };
    commit('SET_COMPUTER_INFO', computer);
  });
};

// 加载爱吃专栏数据
export const loadEat = ({ commit }) => {
  return new Promise((resolve, reject) => {
    const eat = {
    };
    commit('SET_EAT_INFO', eat);
  });
};

// vehicle marque
export const getMark = ({ commit }) => {
  return new Promise((resolve, reject) => {
    const mark = [
      {
        name: 'Peugeot',
        img: 'static/img/mark/peugeot.png'
      },
      {
        name: 'Renault',
        img: 'static/img/mark/renault.png'
      },
      {
        name: 'Citroen',
        img: 'static/img/mark/citroen.png'
      }
    ];
    commit('SET_MARK', mark);
  });
};

// 请求获得商品详细信息
export const loadGoodsInfo = ({ commit }) => {
  commit('SET_LOAD_STATUS', true);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = {
      };
      commit('SET_GOODS_INFO', data);
      commit('SET_LOAD_STATUS', false);
    }, 300);
  });
};

// 获取商品列表
export const loadGoodsList = ({ commit }) => {
  commit('SET_LOAD_STATUS', true);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = {
      };
      commit('SET_GOODS_LIST', data);
      commit('SET_LOAD_STATUS', false);
    });
  });
};

// 添加购物车
export const addShoppingCart = ({ commit }, data) => {
  return new Promise((resolve, reject) => {
    axios.post('http://localhost:8084/addPieceToPanier', {
      'pid': data.goods_id,
      'number': data.count,
      'brand': data.mark,
      'user': data.user_name
    }).then(response => {
    }).catch(error => console.log(error));
    commit('ADD_SHOPPING_CART', data);
  });
};

export const loadAddress = ({ commit }) => {
  return new Promise((resolve, reject) => {
    const address = [
      {
        addressId: '123456',
        name: 'yonghui',
        province: 'Franche-comté',
        city: 'Belfort',
        address: '3 rue Marcel Paul',
        phone: '07****5517',
        postalcode: '90000'
      },
      {
        addressId: '123458',
        name: 'UTBM',
        province: 'Franche-comté',
        city: 'Belfort',
        address: '2 Rue Thierry-Mieg',
        phone: '06****1782',
        postalcode: '90000'
      }
    ];
    commit('SET_USER_ADDRESS', address);
  });
};

export const loadShoppingCart = ({ commit }, user) => {
  return new Promise((resolve, reject) => {
    let panier = [];
    let temp;
    axios.get('http://localhost:8084/queryAllPieceInPanier', {
      params: {user: user}
    }).then(response => {
      temp = response.data;
      temp.forEach((item, index) => {
        let obj = item;
        panier.push({
          number: obj.number,
          title: obj.pieceDomain.name,
          price: obj.pieceDomain.price,
          img: obj.pieceDomain.imgurl,
          brand: obj.brand
        });
      });
      commit('SET_SHOPPING_CART', panier);
    }).catch(error => console.log(error));
  });
};

// 添加注册用户
export const addSignUpUser = ({ commit }, data) => {
  return new Promise((resolve, reject) => {
    const userArr = localStorage.getItem('users');
    let users = [];
    if (userArr) {
      users = JSON.parse(userArr);
    }
    users.push(data);
    localStorage.setItem('users', JSON.stringify(users));
  });
};

// 用户登录
export const login = ({ commit }, data) => {
  return new Promise((resolve, reject) => {
    if (data.username === 'yonghui' && data.password === '123456') {
      localStorage.setItem('loginInfo', JSON.stringify(data));
      commit('SET_USER_LOGIN_INFO', data);
      resolve(true);
      return true;
    }
    const userArr = localStorage.getItem('users');
    console.log(userArr);
    if (userArr) {
      const users = JSON.parse(userArr);
      for (const item of users) {
        if (item.username === data.username) {
          localStorage.setItem('loginInfo', JSON.stringify(item));
          commit('SET_USER_LOGIN_INFO', item);
          resolve(true);
          break;
        }
      }
    } else {
      resolve(false);
    }
  });
};

// 退出登陆
export const signOut = ({ commit }) => {
  localStorage.removeItem('loginInfo');
  commit('SET_USER_LOGIN_INFO', {});
};

// 判断是否登陆
export const isLogin = ({ commit }) => {
  const user = localStorage.getItem('loginInfo');
  if (user) {
    commit('SET_USER_LOGIN_INFO', JSON.parse(user));
  }
};
