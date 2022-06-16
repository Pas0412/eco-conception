import axios from 'axios';

// home page
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
    axios.get('http://121.40.86.86:8084/queryAllPieceByType?type1=Freinage').then(response => {
      pieces = response.data;
      commit('SET_PIECES_0', pieces);
    }).catch(error => console.log(error));
  });
};

export const getPieces1 = ({ commit }) => {
  return new Promise((resolve, reject) => {
    let pieces;
    axios.get('http://121.40.86.86:8084/queryAllPieceByType?type1=Filtration').then(response => {
      pieces = response.data;
      commit('SET_PIECES_1', pieces);
    }).catch(error => console.log(error));
  });
};

export const getPieces2 = ({ commit }) => {
  return new Promise((resolve, reject) => {
    let pieces;
    axios.get('http://121.40.86.86:8084/queryAllPieceByType?type1=Moteur').then(response => {
      pieces = response.data;
      commit('SET_PIECES_2', pieces);
    }).catch(error => console.log(error));
  });
};

export const getPieces3 = ({ commit }) => {
  return new Promise((resolve, reject) => {
    let pieces;
    axios.get('http://121.40.86.86:8084/queryAllPieceByType?type1=Embrayage, boite de vitesse, cardans').then(response => {
      pieces = response.data;
      commit('SET_PIECES_3', pieces);
    }).catch(error => console.log(error));
  });
};

export const getPieces4 = ({ commit }) => {
  return new Promise((resolve, reject) => {
    let pieces;
    axios.get('http://121.40.86.86:8084/queryAllPieceByType?type1=Demarrage et charge').then(response => {
      pieces = response.data;
      commit('SET_PIECES_4', pieces);
    }).catch(error => console.log(error));
  });
};

export const getPieces5 = ({ commit }) => {
  return new Promise((resolve, reject) => {
    let pieces;
    axios.get('http://121.40.86.86:8084/queryAllPieceByType?type1=Echappement').then(response => {
      pieces = response.data;
      commit('SET_PIECES_5', pieces);
    }).catch(error => console.log(error));
  });
};

export const getPieces6 = ({ commit }) => {
  return new Promise((resolve, reject) => {
    let pieces;
    axios.get('http://121.40.86.86:8084/queryAllPieceByType?type1=Direction / Suspension / Roulements').then(response => {
      pieces = response.data;
      commit('SET_PIECES_6', pieces);
    }).catch(error => console.log(error));
  });
};

export const getPieces7 = ({ commit }) => {
  return new Promise((resolve, reject) => {
    let pieces;
    axios.get('http://121.40.86.86:8084/queryAllPieceByType?type1=Visibilite').then(response => {
      pieces = response.data;
      commit('SET_PIECES_7', pieces);
    }).catch(error => console.log(error));
  });
};

export const getPieces8 = ({ commit }) => {
  return new Promise((resolve, reject) => {
    let pieces;
    axios.get('http://121.40.86.86:8084/queryAllPieceByType?type1=Chauffage et climatisation').then(response => {
      pieces = response.data;
      commit('SET_PIECES_8', pieces);
    }).catch(error => console.log(error));
  });
};

export const getPieces9 = ({ commit }) => {
  return new Promise((resolve, reject) => {
    let pieces;
    axios.get('http://121.40.86.86:8084/queryAllPieceByType?type1=Habitacle').then(response => {
      pieces = response.data;
      commit('SET_PIECES_9', pieces);
    }).catch(error => console.log(error));
  });
};

export const getPieces10 = ({ commit }) => {
  return new Promise((resolve, reject) => {
    let pieces;
    axios.get('http://121.40.86.86:8084/queryAllPieceByType?type1=Accessoires et portage').then(response => {
      pieces = response.data;
      commit('SET_PIECES_10', pieces);
    }).catch(error => console.log(error));
  });
};

export const getPieces11 = ({ commit }) => {
  return new Promise((resolve, reject) => {
    let pieces;
    axios.get('http://121.40.86.86:8084/queryAllPieceByType?type1=Jantes %26 roues').then(response => {
      pieces = response.data;
      commit('SET_PIECES_11', pieces);
    }).catch(error => console.log(error));
  });
};

export const getPieces12 = ({ commit }) => {
  return new Promise((resolve, reject) => {
    let pieces;
    axios.get('http://121.40.86.86:8084/queryAllPieceByType?type1=Carrosserie').then(response => {
      pieces = response.data;
      commit('SET_PIECES_12', pieces);
    }).catch(error => console.log(error));
  });
};

export const getPopularList = ({ commit }) => {
  return new Promise((resolve, reject) => {
    let popular;
    axios.get('http://121.40.86.86:8084/queryHighestRatePiece').then(response => {
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

// add panier
export const addShoppingCart = ({ commit }, data) => {
  return new Promise((resolve, reject) => {
    axios.post(`http://121.40.86.86:8084/addPieceToPanier?pid=${data.goods_id}&number=${data.count}&brand=${data.mark}&user=${data.user_name}`).then(response => {
    }).catch(error => console.log(error));
    commit('ADD_SHOPPING_CART', data);
  });
};

// commit order
export const commitOrder = ({ commit }, data) => {
  return new Promise((resolve, reject) => {
    axios.post(`http://121.40.86.86:8084/commitOrder?user=${data}`);
  });
};

// get all order
export const getOrder = ({ commit }, user) => {
  return new Promise((resolve, reject) => {
    let order = [];
    let temp;
    axios.get(`http://121.40.86.86:8084/queryAllOrder?user=${user}`).then(response => {
      temp = response.data;
      temp.forEach((item, index) => {
        let obj = item;
        order.push({
          id: 'X123124' + obj.id,
          number: obj.number,
          title: obj.pieceDomain.name,
          price: obj.pieceDomain.price,
          img: obj.pieceDomain.imgurl,
          brand: obj.brand,
          time: obj.time
        });
        commit('SET_ORDER', order);
      });
    }).catch(error => console.log(error));
  });
};

// delete panier
export const deletePanier = ({ commit }, user) => {
  return new Promise((resolve, reject) => {
    axios.post(`http://121.40.86.86:8084/deleteAll?user=${user}`).then(response => {
      let data = [];
      commit('SET_SHOPPING_CART', data);
    });
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
    axios.get(`http://121.40.86.86:8084/queryAllPieceInPanier?user=${user}`).then(response => {
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
