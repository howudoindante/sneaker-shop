import React from "react";
import styles from "./OrderCard.module.scss";
const OrderCard = () => {
  return (
    <div className={`${styles.card} d-flex flex-column mt-30 mr-35`}>
      <div className={`d-flex mt-20 ml-25`}>
        <img src="/img/orderBox.svg" alt="box" />
        <div className={`${styles.orderName} ml-20`}>
          <p>Заказ#123</p>
          <span>Товаров: 3</span>
        </div>
      </div>
      <div className={`${styles.deliveryAddress} mt-15 ml-25`}>
        <p>Адрес доставки</p>
        <span>г.Москва ул. Малая Бронная 32</span>
      </div>
      <button className={`mt-15`}>Подробнее</button>
    </div>
  );
};

export default OrderCard;
