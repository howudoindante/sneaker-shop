import axios from "axios";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./CartCard.module.scss";
import { TType as CartTType } from "../../../redux/reducers/cartItems";
interface CardTypes {
  remove: Function;
  pair: any;
}
const CartCard = ({ remove, pair }: CardTypes) => {
  const dispatch = useDispatch();
  const { img, title, price } = pair;
  const { items: cartItems } = useSelector((state: any) => state.cartItems);
  function removeFromCart() {
    const [result] = cartItems.filter(
      (element: any) => Number(element.originId) === Number(pair?.originId)
    );
    axios
      .delete(`https://60f00e68f587af00179d3d0d.mockapi.io/cart/${result.id}`)
      .then(async () => {
        await dispatch({
          type: CartTType.REMOVEFROMCART,
          payload: result.id,
        });

        await dispatch({
          type: CartTType.UPDATE_TOTAL,
        });
      })
      .catch((e) => {
        alert("Не удалось удалить товар,попробуйте снова");
      });
  }
  return (
    <div className={`${styles.card} d-flex align-center justify-between`}>
      <img
        className={`${styles.sneakersImg} mr-30 ml-30`}
        src={img}
        alt="nike blazer red"
        width={100}
        height={100}
      />
      <div>
        <span className="d-ib">{title}</span>
        <div className="d-flex mt-10">
          <div className={`${styles.card__price} d-flex flex-column`}>
            <span>Цена</span>
            <b>{price} руб.</b>
          </div>
        </div>
      </div>
      <img
        className={`${styles.button} `}
        src="/img/closeSmall.svg"
        alt="remove from cart"
        onClick={() => removeFromCart()}
      />
    </div>
  );
};

export default CartCard;
