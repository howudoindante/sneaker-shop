import { ItemType } from "../../types/types";

interface stateTypes {
  items: ItemType[];
  isLoading: boolean;
  total: number;
}

const initialState: stateTypes = {
  items: [],
  isLoading: false,
  total: 0,
};

export enum TType {
  INIT = "CART/INIT",
  ADD2CART = "CART/ADD_TO_CART",
  LOADCART = "CART/LOAD_CART",
  REMOVEFROMCART = "CART/REMOVE_FROM_CART",
  LOADING = "CART/LOADING_START",
  LOADING_FINISH = "CART/LOADING_FINISH",
  CLEAR_CART = "CART/CLEAR_CART",
  UPDATE_TOTAL = "CART/UPDATE_TOTAL",
}

interface TAction {
  type:
    | TType.INIT
    | TType.LOADCART
    | TType.REMOVEFROMCART
    | TType.ADD2CART
    | TType.LOADING
    | TType.LOADING_FINISH
    | TType.CLEAR_CART
    | TType.UPDATE_TOTAL;
  payload?: any;
}

export const cartItems = (
  state: stateTypes = initialState,
  action: TAction
) => {
  switch (action.type) {
    case TType.INIT:
      return { ...state };
    case TType.UPDATE_TOTAL:
      let totalPrice = 0;
      state.items.forEach((item: ItemType) => {
        totalPrice += Number(item.price);
      });
      return { ...state, total: totalPrice };
    case TType.LOADCART:
      return { ...state, items: action.payload };
    case TType.ADD2CART:
      return { ...state, items: [...state.items, action.payload] };
    case TType.CLEAR_CART:
      return { ...state, items: [] };
    case TType.REMOVEFROMCART:
      return {
        ...state,
        items: state.items.filter((item: any) => item.id !== action.payload),
      };
    case TType.LOADING:
      return { ...state, isLoading: true };
    case TType.LOADING_FINISH:
      return { ...state, isLoading: false };
    default:
      return state;
  }
};
