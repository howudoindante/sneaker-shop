import React from "react";
import styles from "./Cart.module.scss";
import CartCard from "../CartCard/CartCard";
import Button, { iconNames } from "../../Button/Button";

interface CartTypes {
  onButtonClick: () => void;
}

const Cart = ({ onButtonClick }: CartTypes) => {
  return (
    <div className={`${styles.cartWrapper} d-flex flex-column`}>
      <h3 className="ml-15 mt-50">Корзина</h3>
      <div className={`${styles.cartItems}`}>
        <CartCard />
      </div>
      <div className={`${styles.total}`}>
        Итого
        <div
          className={`${styles.subTotal} d-flex justify-between mt-20 mb-10`}
        >
          <span>Общая сумма заказа</span> <b>18951 руб.</b>
        </div>
      </div>
      <Button
        onButtonClick={onButtonClick}
        label="Перейти к оплате"
        icon={iconNames.Forward}
      />
    </div>
  );
};

export default Cart;
