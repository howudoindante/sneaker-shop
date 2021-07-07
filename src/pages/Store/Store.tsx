import React from "react";
import Card from "../../components/Card/Card";
import styles from "./Store.module.scss";
const Store = () => {
  return (
    <div className={`${styles.storeContent}`}>
      <h1>Все кроссовки</h1>
      <div className={`${styles.cards} d-flex flex-wrap`}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Store;
