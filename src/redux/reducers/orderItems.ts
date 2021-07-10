const initialState = {};

enum TType {
  INIT = "ORDERS/INIT",
  ADDORDER = "ORDERS/ADD_ORDER",
  LOADING = "ORDERS/LOADING_START",
  LOADING_FINISH = "ORDERS/LOADING_FINISH",
}

interface TAction {
  type: TType.INIT | TType.ADDORDER | TType.LOADING | TType.LOADING_FINISH;
}

export const orderItems = (state = initialState, action: TAction) => {
  switch (action.type) {
    case TType.INIT:
      console.log(TType.INIT);
      return { ...state };

    default:
      return state;
  }
};
