import { ItemType } from "../../types/types";

const initialState = {
  items: [],
  isLoading: true,
};

export enum TActionStore {
  INIT = "STORE/INIT",
  FILLSTORE = "STORE/FILL_STORE",
  LOADING = "STORE/LOADING_START",
  LOADING_FINISH = "STORE/LOADING_FINISH",
}

interface TAction {
  type:
    | TActionStore.INIT
    | TActionStore.FILLSTORE
    | TActionStore.LOADING
    | TActionStore.LOADING_FINISH;
  payload?: any;
}
export const storeItems = (state: any = initialState, action: TAction) => {
  switch (action.type) {
    case TActionStore.INIT:
      return { ...state };
    case TActionStore.FILLSTORE:
      return { ...state, items: action.payload };
    case TActionStore.LOADING:
      return { ...state, isLoading: true };
    case TActionStore.LOADING_FINISH:
      return { ...state, isLoading: false };

    default:
      return state;
  }
};
