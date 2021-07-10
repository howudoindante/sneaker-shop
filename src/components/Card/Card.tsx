import React from "react";
import styles from "./Card.module.scss";
import { ItemType } from "../../types/types";
import ContentLoader, { Facebook } from "react-content-loader";
interface CardTypes {
  item?: ItemType;
  inFavourite?: boolean;
  inCart?: boolean;
  isLoading?: boolean;
}

const Card = ({
  item,
  inFavourite = false,
  inCart = false,
  isLoading = false,
}: CardTypes) => {
  const [isAdded, setIsAdded] = React.useState(inCart);
  const [isFavourite, setIsFavourite] = React.useState(inFavourite);

  function addToCart() {
    setIsAdded((prev) => (prev === false ? !prev : prev));
  }

  function removeFromCart() {
    setIsAdded((prev) => (prev === true ? !prev : prev));
  }

  function addToFavourite() {
    setIsFavourite((prev) => (prev === false ? !prev : prev));
  }

  function removeFavourite() {
    setIsFavourite((prev) => (prev === true ? !prev : prev));
  }

  return (
    <div
      className={`${styles.card} ${
        isLoading ? "" : styles.card_additional
      } d-flex flex-column align-center p-20 mr-50 mt-30`}
    >
      {isLoading ? (
        <ContentLoader
          speed={2}
          width={210}
          height={260}
          viewBox="0 0 150 190"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="0" y="0" rx="12" ry="12" width="150" height="96" />
          <rect x="0" y="104" rx="5" ry="5" width="150" height="10" />
          <rect x="0" y="121" rx="5" ry="5" width="150" height="10" />
          <rect x="0" y="138" rx="5" ry="5" width="85" height="10" />
          <rect x="0" y="155" rx="12" ry="12" width="107" height="31" />
          <rect x="118" y="156" rx="8" ry="8" width="30" height="31" />
        </ContentLoader>
      ) : (
        <>
          {isFavourite ? (
            <img
              className={`${styles.favourite} ${styles.card__button}`}
              src="/img/favouriteAdded.svg"
              width={30}
              height={30}
              alt="remove from favourite"
              onClick={() => removeFavourite()}
            />
          ) : (
            <img
              className={`${styles.favourite} ${styles.card__button}`}
              src="/img/favourite.svg"
              width={30}
              height={30}
              alt="add to favourite"
              onClick={() => addToFavourite()}
            />
          )}
          <img
            className={`${styles.sneakersImg}`}
            src={item?.img}
            alt={item?.title}
            width={150}
            height={96}
          />
          <span className="d-ib mt-10">{item?.title}</span>
          <div className="d-flex justify-between align-center mt-10">
            <div className={`${styles.card__price} d-flex flex-column`}>
              <span>Цена</span>
              <b>{item?.price} руб.</b>
            </div>
            {isAdded ? (
              <img
                className={`${styles.card__button}`}
                src="/img/added.svg"
                width={30}
                height={30}
                alt="remove from cart"
                onClick={() => removeFromCart()}
              />
            ) : (
              <img
                className={`${styles.card__button}`}
                src="/img/add.svg"
                width={30}
                height={30}
                alt="add to cart"
                onClick={() => addToCart()}
              />
            )}
          </div>{" "}
        </>
      )}
    </div>
  );
};

export default Card;
