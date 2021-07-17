import React from "react";
import Button, { iconNames } from "../../components/Button/Button";
import OrderCard from "../../components/OrderCard/OrderCard";
import styles from "./Orders.module.scss";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { OrderItemType } from "../../types/types";
import { getOrders } from "../../apiquery";
const Orders = () => {
  const dispatch = useDispatch();
  const { items, isLoading } = useSelector((state: any) => state.orderItems);
  React.useEffect(() => {
    getOrders(dispatch);
  }, []);
  return (
    <div className={`${styles.OrdersContent}`}>
      <div className={`${styles.title} d-flex align-center`}>
        <Link to="/">
          <img className="mr-40" src="/img/back.svg" alt="back" />
        </Link>
        <h1>Мои заказы</h1>
      </div>

      <div className={`${styles.cards} d-flex flex-wrap`}>
        {items.length > 0 ? (
          items.map((item: OrderItemType) => {
            return <OrderCard key={`${item.id}`} item={item} />;
          })
        ) : (
          <div className={`${styles.empty} d-flex flex-column align-center`}>
            <img src="/img/sadEmoji.png" alt="sadEmoji" className="mt-50" />
            <h4 className="mt-25 mb-15">Как-то пустовато тут</h4>
            <span>Похоже вы еще ничего не заказывали.</span>
            <Link to="/">
              <Button label="Вернуться в магазин" icon={iconNames.Back} />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Orders;
