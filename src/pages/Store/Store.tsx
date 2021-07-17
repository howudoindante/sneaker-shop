import React from "react";
import Card from "../../components/Card/Card";
import styles from "./Store.module.scss";
import { ItemType } from "../../types/types";
import { useSelector } from "react-redux";

const Store = () => {
  const { items: store, isLoading } = useSelector(
    (state: any) => state.storeItems
  );
  const { items: cartItems } = useSelector((state: any) => state.cartItems);
  const { items: favItems } = useSelector((state: any) => state.favItems);

  return (
    <div className={`${styles.storeContent}`}>
      <h1>Все кроссовки</h1>
      <div className={`${styles.cards} d-flex flex-wrap`}>
        {store && !isLoading
          ? store?.map((item: ItemType) => {
              let inCart =
                cartItems.filter(
                  (element: any) => Number(element.originId) === Number(item.id)
                ).length > 0
                  ? true
                  : false;
              let inFavourite =
                favItems.filter(
                  (element: any) => Number(element.originId) === Number(item.id)
                ).length > 0
                  ? true
                  : false;
              return (
                <Card
                  key={item.id}
                  inCart={inCart}
                  inFavourite={inFavourite}
                  item={{
                    originId: item.id,
                    title: item.title,
                    img: item.img,
                    price: item.price,
                  }}
                />
              );
            })
          : new Array(20)
              .fill(1)
              .map((value, index) => (
                <Card key={index} isLoading={isLoading} />
              ))}
      </div>
    </div>
  );
};

export default Store;
