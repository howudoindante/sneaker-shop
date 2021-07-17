import React from "react";
import styles from "./Cart.module.scss";
import CartCard from "../CartCard/CartCard";
import Button, { iconNames } from "../../Button/Button";

interface CartTypes {
  onButtonClick: () => void;
  data: any[];
  total: number;
}

const Cart = ({ onButtonClick, data, total }: CartTypes) => {
  const [items, setItems] = data;
  function removeFromCart(id: number) {
    setItems((prev: any) => prev.filter((item: any) => item.id !== id));
  }
  return (
    <div className={`${styles.cartWrapper} d-flex flex-column`}>
      <h3 className="ml-15 mt-50">Корзина</h3>
      <div className={`${styles.cartItems}`}>
        {items.map((item: any) => (
          <CartCard key={item.id} remove={removeFromCart} pair={item} />
        ))}
      </div>
      <div className={`${styles.total}`}>
        Итого
        <div
          className={`${styles.subTotal} d-flex justify-between mt-20 mb-10`}
        >
          <span>Общая сумма заказа</span> <b>{total} руб.</b>
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
