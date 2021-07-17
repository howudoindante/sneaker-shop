import React from "react";
import { OrderItemType } from "../../types/types";
import styles from "./OrderCard.module.scss";
interface OrderCardTypes {
  item?: OrderItemType;
}
const OrderCard = ({ item }: OrderCardTypes) => {
  return (
    <div className={`${styles.card} d-flex flex-column mt-30 mr-35`}>
      <div className={`d-flex mt-20 ml-25`}>
        <img src="/img/orderBox.svg" alt="box" />
        <div className={`${styles.orderName} ml-20`}>
          <p>Заказ#{item?.id}</p>
          <span>Товаров: {item?.items.length}</span>
        </div>
      </div>
      <div className={`${styles.deliveryAddress} mt-15 ml-25`}>
        <p>Адрес доставки</p>
        <span>{item?.address}</span>
      </div>
      <button className={`mt-15`}>Подробнее</button>
    </div>
  );
};

export default OrderCard;
