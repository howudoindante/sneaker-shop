const initialState = { isLoading: false, items: [] };

export enum TType {
  INIT = "FAV/INIT",
  ADD2FAV = "FAV/ADD_TO_FAVOURITE",
  LOADFAV = "FAV/LOAD_FAVOURITE",
  REMOVEFROMFAV = "FAV/REMOVE_FROM_FAVOURITE",
  LOADING = "FAV/LOADING_START",
  LOADING_FINISH = "FAV/LOADING_FINISH",
}

interface TAction {
  type:
    | TType.INIT
    | TType.REMOVEFROMFAV
    | TType.ADD2FAV
    | TType.LOADFAV
    | TType.LOADING
    | TType.LOADING_FINISH;
  payload: any;
}

export const favItems = (state = initialState, action: TAction) => {
  switch (action.type) {
    case TType.INIT:
      return { ...state };
    case TType.LOADFAV:
      return { ...state, items: action.payload };
    case TType.ADD2FAV:
      return { ...state, items: [...state.items, action.payload] };
    case TType.REMOVEFROMFAV:
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
