import React from "react";
import styles from "./EmptyCart.module.scss";
import Button, { iconNames } from "../../Button/Button";
interface CartTypes {
  onButtonClick: () => void;
}
const EmptyCart = ({ onButtonClick }: CartTypes) => {
  return (
    <div className={`${styles.emptyCartWrapper} d-flex flex-column`}>
      <h3 className="ml-15 mt-50">Корзина</h3>
      <div className="d-flex flex-column align-center">
        <img
          width={180}
          src="/img/emptyBox.svg"
          alt="box"
          className="mr-10 mb-10"
        />
        <p className="mb-15">Корзина пуста</p>
        <span className="mb-50  ">Похоже вы еще ничего не добавили</span>
        <Button
          onButtonClick={onButtonClick}
          label="Вернуться в магазин"
          icon={iconNames.Back}
        />
      </div>
    </div>
  );
};

export default EmptyCart;
