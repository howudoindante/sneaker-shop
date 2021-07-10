import React from "react";
import Card from "../../components/Card/Card";
import Button, { iconNames } from "../../components/Button/Button";
import { Link } from "react-router-dom";
import styles from "./Favourites.module.scss";
const Favourites = () => {
  function sayHi() {
    console.log("Hi");
  }
  return (
    <div className={`${styles.FavouritesContent}`}>
      <div className={`${styles.title} d-flex align-center`}>
        <Link to="/">
          <img className="mr-40" src="/img/back.svg" alt="back" />
        </Link>

        <h1>Мои закладки</h1>
      </div>

      <div className={`${styles.cards} d-flex flex-wrap flex-wrap  mt-30`}>
        {[].length > 0 ? (
          ""
        ) : (
          <div className={`${styles.empty} d-flex flex-column align-center`}>
            <img src="/img/thinkEmoji.png" alt="thinkEmoji" className="mt-50" />
            <h4 className="mt-25 mb-15">Закладок нет</h4>
            <span>
              Для кого-то это повод для грусти из-за того,что его обманули,а для
              нас повод задуматься нужен ли нам этот раздел.
            </span>
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

export default Favourites;
