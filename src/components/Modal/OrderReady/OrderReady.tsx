import React from "react";
import styles from "./OrderReady.module.scss";
import Button, { iconNames } from "../../Button/Button";

interface CartTypes {
  orderNumber: number;
  onButtonClick: () => void;
}

const OrderReady = ({ orderNumber, onButtonClick }: CartTypes) => {
  return (
    <div className={`${styles.orderReadyWrapper} d-flex flex-column`}>
      <h3 className="ml-15 mt-50">Корзина</h3>
      <div className="d-flex flex-column align-center">
        <img
          width={130}
          src="/img/bigBox.svg"
          alt="box"
          className="mr-10 mb-40"
        />
        <p className="mb-15">Заказ #{orderNumber} оформлен</p>
        <span className="mb-50  ">Совсем скоро мы доставим вам ваш заказ</span>
        <Button
          onButtonClick={onButtonClick}
          label="Вернуться в магазин"
          icon={iconNames.Back}
        />
      </div>
    </div>
  );
};

export default OrderReady;
