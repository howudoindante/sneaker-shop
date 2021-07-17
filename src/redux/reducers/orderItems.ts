const initialState = { items: [], isLoading: false };

export enum TType {
  INIT = "ORDERS/INIT",
  LOAD = "ORDERS/LOAD",
  ADDORDER = "ORDERS/ADD_ORDER",
  LOADING = "ORDERS/LOADING_START",
  LOADING_FINISH = "ORDERS/LOADING_FINISH",
}

interface TAction {
  type:
    | TType.INIT
    | TType.ADDORDER
    | TType.LOADING
    | TType.LOADING_FINISH
    | TType.LOAD;
  payload?: any;
}

export const orderItems = (state = initialState, action: TAction) => {
  switch (action.type) {
    case TType.INIT:
      return { ...state };
    case TType.LOAD:
      return { ...state, items: action.payload };
    case TType.LOADING:
      return { ...state, isLoading: true };
    case TType.LOADING_FINISH:
      return { ...state, isLoading: false };
    default:
      return state;
  }
};
