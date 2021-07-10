const initialState = {};

enum TType {
  INIT = "FAV/INIT",
  ADD2FAV = "FAV/ADD_TO_FAVOURITE",
  REMOVEFROMFAV = "FAV/REMOVE_FROM_FAVOURITE",
  LOADING = "FAV/LOADING_START",
  LOADING_FINISH = "FAV/LOADING_FINISH",
}

interface TAction {
  type:
    | TType.INIT
    | TType.REMOVEFROMFAV
    | TType.ADD2FAV
    | TType.LOADING
    | TType.LOADING_FINISH;
}

export const favItems = (state = initialState, action: TAction) => {
  switch (action.type) {
    case TType.INIT:
      return { ...state };

    default:
      return state;
  }
};
