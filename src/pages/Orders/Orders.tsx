import React from "react";
import Button, { iconNames } from "../../components/Button/Button";
import OrderCard from "../../components/OrderCard/OrderCard";
import styles from "./Orders.module.scss";
let arr = [<OrderCard />, <OrderCard />, <OrderCard />, <OrderCard />];
const Orders = () => {
  function sayHi() {
    console.log("Hi");
  }
  return (
    <div className={`${styles.OrdersContent}`}>
      <div className={`${styles.title} d-flex align-center`}>
        <img className="mr-40" src="/img/back.svg" alt="back" />
        <h1>Мои заказы</h1>
      </div>

      <div className={`${styles.cards} d-flex flex-wrap`}>
        {arr.length > 0 ? (
          arr
        ) : (
          <div className={`${styles.empty} d-flex flex-column align-center`}>
            <img src="/img/sadEmoji.png" alt="sadEmoji" className="mt-50" />
            <h4 className="mt-25 mb-15">Как-то пустовато тут</h4>
            <span>Похоже вы еще ничего не заказывали.</span>
            <Button
              onButtonClick={sayHi}
              label="Вернуться в магазин"
              icon={iconNames.Back}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Orders;
