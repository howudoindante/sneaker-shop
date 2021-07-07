import React from "react";
import styles from "./Card.module.scss";

const Card = () => {
  return (
    <div
      className={`${styles.card} d-flex flex-column align-center p-20 mr-50 mt-30`}
    >
      <img
        className={`${styles.favourite} ${styles.card__button}`}
        src="/img/favourite.svg"
        width={30}
        height={30}
        alt="add to favourite"
      />
      <img
        className={`${styles.sneakersImg}`}
        src="/img/sneakers/nike_blazer_red.jpg"
        alt="nike blazer red"
        width={150}
        height={96}
      />
      <span className="d-ib mt-10">
        Мужские кроссовки NIKE BLAZER MID 77 VNTG
      </span>
      <div className="d-flex justify-between align-center mt-15">
        <div className={`${styles.card__price} d-flex flex-column`}>
          <span>Цена</span>
          <b>7990 руб.</b>
        </div>
        <img
          className={`${styles.card__button}`}
          src="/img/add.svg"
          width={30}
          height={30}
          alt="add to cart"
        />
      </div>
    </div>
  );
};

export default Card;
