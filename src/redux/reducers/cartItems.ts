const initialState = {};

enum TType {
  INIT = "CART/INIT",
  ADD2CART = "CART/ADD_TO_CART",
  REMOVEFROMCART = "CART/REMOVE_FROM_CART",
  LOADING = "CART/LOADING_START",
  LOADING_FINISH = "CART/LOADING_FINISH",
}

interface TAction {
  type:
    | TType.INIT
    | TType.REMOVEFROMCART
    | TType.ADD2CART
    | TType.LOADING
    | TType.LOADING_FINISH;
}

export const cartItems = (state = initialState, action: TAction) => {
  switch (action.type) {
    case TType.INIT:
      console.log(TType.INIT);
      return { ...state };

    default:
      return state;
  }
};
