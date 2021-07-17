import axios from "axios";
import { TActionStore } from "../redux/reducers/storeItems";
import { TType as cart } from "../redux/reducers/cartItems";
import { TType as favourite } from "../redux/reducers/favItems";
import { TType as order } from "../redux/reducers/orderItems";
export function getStoreItems(dispatch) {
    axios
        .get("https://60f00e68f587af00179d3d0d.mockapi.io/items")
        .then((response) => {
            dispatch({ type: TActionStore.INIT });
            dispatch({ type: TActionStore.LOADING });

            // setTimeout(() => {
            dispatch({ type: TActionStore.FILLSTORE, payload: response.data });
            dispatch({ type: TActionStore.LOADING_FINISH });
            // }, 4000);
        });
}

export function getCartItems(dispatch) {
    axios
        .get("https://60f00e68f587af00179d3d0d.mockapi.io/cart")
        .then(async (response) => {
            await dispatch({ type: cart.INIT });
            await dispatch({ type: cart.LOADING });
            await dispatch({ type: cart.LOADCART, payload: response.data });
            await dispatch({ type: cart.UPDATE_TOTAL });
            await dispatch({ type: cart.LOADING_FINISH });
        });
}

export function getFavouriteItems(dispatch) {
    axios
        .get("https://60f00e68f587af00179d3d0d.mockapi.io/favourite")
        .then((response) => {
            dispatch({ type: favourite.INIT });
            dispatch({ type: favourite.LOADING });
            dispatch({ type: favourite.LOADFAV, payload: response.data });
            dispatch({ type: favourite.LOADING_FINISH });
        });
}
export function getOrders(dispatch) {
    axios
        .get("https://60f00e68f587af00179d3d0d.mockapi.io/orders")
        .then((response) => {
            dispatch({ type: order.INIT });
            dispatch({ type: order.LOADING });
            dispatch({ type: order.LOAD, payload: response.data });
            dispatch({ type: order.LOADING_FINISH });
        });
}
