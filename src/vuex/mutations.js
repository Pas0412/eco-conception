// set 13 types of pieces
export const SET_CHILDTYPE = (state, data) => {
  state.childType = data;
};

export const SET_PIECES_0 = (state, data) => {
  state.piecesList0 = data;
};

export const SET_PIECES_1 = (state, data) => {
  state.piecesList1 = data;
};

export const SET_PIECES_2 = (state, data) => {
  state.piecesList2 = data;
};

export const SET_PIECES_3 = (state, data) => {
  state.piecesList3 = data;
};

export const SET_PIECES_4 = (state, data) => {
  state.piecesList4 = data;
};

export const SET_PIECES_5 = (state, data) => {
  state.piecesList5 = data;
};

export const SET_PIECES_6 = (state, data) => {
  state.piecesList6 = data;
};

export const SET_PIECES_7 = (state, data) => {
  state.piecesList7 = data;
};

export const SET_PIECES_8 = (state, data) => {
  state.piecesList8 = data;
};

export const SET_PIECES_9 = (state, data) => {
  state.piecesList9 = data;
};

export const SET_PIECES_10 = (state, data) => {
  state.piecesList10 = data;
};

export const SET_PIECES_11 = (state, data) => {
  state.piecesList11 = data;
};

export const SET_PIECES_12 = (state, data) => {
  state.piecesList12 = data;
};

export const SET_POPULAR_LIST = (state, data) => {
  state.popularList = data;
};

// set mark
export const SET_MARK = (state, data) => {
  state.mark = data;
};

// set sign up
export const SET_SIGN_UP_SETP = (state, step) => {
  state.signUpStep = step;
};

// set user log in info
export const SET_USER_LOGIN_INFO = (state, data) => {
  state.userInfo = data;
};

// home page
export const SET_CAROUSELITEMS_INFO = (state, { carouselItems, activity }) => {
  state.marketing.CarouselItems = carouselItems;
  state.marketing.activity = activity;
};

// add panier
export const ADD_SHOPPING_CART = (state, data) => {
  const item = {
    goods_id: data.goods_id,
    self: data.self,
    img: data.img,
    count: data.count,
    mark: data.mark,
    price: data.self.price,
    title: data.title
  };
  state.shoppingCart.push(item);
  state.newShoppingCart = data;
};

// set panier
export const SET_SHOPPING_CART = (state, data) => {
  state.shoppingCart = data;
};

// commit order
export const SET_ORDER = (state, data) => {
  state.orderList = data;
};

// 设置收获地址
export const SET_USER_ADDRESS = (state, data) => {
  state.address = data;
};
