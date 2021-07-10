import React from "react";
import styles from "./CartCard.module.scss";
interface CardTypes {
  remove: Function;
  pair: any;
}
const CartCard = ({ remove, pair }: CardTypes) => {
  const { id, price } = pair;
  return (
    <div className={`${styles.card} d-flex align-center justify-between`}>
      <img
        className={`${styles.sneakersImg} mr-30 ml-30`}
        src="/img/sneakers/nike_blazer_red.jpg"
        alt="nike blazer red"
        width={100}
        height={100}
      />
      <div>
        <span className="d-ib">Мужские кроссовки NIKE BLAZER MID 77 VNTG</span>
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
        onClick={() => remove(id)}
      />
    </div>
  );
};

export default CartCard;
