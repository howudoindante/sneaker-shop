import React from "react";
import styles from "./Card.module.scss";
import { ItemType } from "../../types/types";
import ContentLoader from "react-content-loader";
import { useSelector, useDispatch } from "react-redux";
import { TType as CartTType } from "../../redux/reducers/cartItems";
import { TType as FavTType } from "../../redux/reducers/favItems";
import axios from "axios";
interface CardTypes {
  item?: ItemType;
  inFavourite?: boolean;
  inCart?: boolean;
  isLoading?: boolean;
  showAdd?: boolean;
}

const Card = ({
  item,
  inFavourite = false,
  inCart = false,
  isLoading = false,
  showAdd = true,
}: CardTypes) => {
  const [isAdded, setIsAdded] = React.useState(false);
  const [isFavourite, setIsFavourite] = React.useState(false);
  const { items: cartItems } = useSelector((state: any) => state.cartItems);
  const { items: favItems } = useSelector((state: any) => state.favItems);
  const dispatch = useDispatch();
  React.useEffect(() => {
    setIsAdded(inCart);
    setIsFavourite(inFavourite);
  }, [inCart, inFavourite]);

  function addToCart() {
    axios
      .post("https://60f00e68f587af00179d3d0d.mockapi.io/cart", item)
      .then(async (response) => {
        await dispatch({
          type: CartTType.ADD2CART,
          payload: { ...response.data, id: Number(response.data.id) },
        });
        await dispatch({
          type: CartTType.UPDATE_TOTAL,
        });
      })
      .catch((e) => {
        alert("Не удалось добавить товар,попробуйте снова");
      });

    setIsAdded((prev) => (prev === false ? !prev : prev));
  }

  function removeFromCart() {
    const [result] = cartItems.filter(
      (element: any) => Number(element.originId) === Number(item?.originId)
    );
    axios
      .delete(`https://60f00e68f587af00179d3d0d.mockapi.io/cart/${result.id}`)
      .then(async () => {
        await dispatch({
          type: CartTType.REMOVEFROMCART,
          payload: result.id,
        });

        await dispatch({
          type: CartTType.UPDATE_TOTAL,
        });
      })
      .catch((e) => {
        alert("Не удалось удалить товар,попробуйте снова");
      });
    setIsAdded((prev) => (prev === true ? !prev : prev));
  }

  function addToFavourite() {
    axios
      .post("https://60f00e68f587af00179d3d0d.mockapi.io/favourite", item)
      .then((response) => {
        dispatch({
          type: FavTType.ADD2FAV,
          payload: { ...response.data, id: Number(response.data.id) },
        });
      })
      .catch((e) => {
        alert("Не удалось добавить товар,попробуйте снова");
      });
    setIsFavourite((prev) => (prev === false ? !prev : prev));
  }

  function removeFavourite() {
    const [result] = favItems.filter((element: any) => {
      return Number(element.originId) === Number(item?.originId);
    });
    axios
      .delete(
        `https://60f00e68f587af00179d3d0d.mockapi.io/favourite/${result.id}`
      )
      .then(() => {
        dispatch({
          type: FavTType.REMOVEFROMFAV,
          payload: result.id,
        });
      })
      .catch((e) => {
        alert("Не удалось удалить товар,попробуйте снова");
      });
    setIsFavourite((prev) => (prev === true ? !prev : prev));
  }

  return (
    <div
      className={`${styles.card} ${
        isLoading ? "" : styles.card_additional
      } d-flex flex-column align-center p-20 mr-50 mt-30`}
    >
      {/* if Data is loading we use skeleton to display a stub */}
      {isLoading ? (
        //Skeleton
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
        // Loaded content
        <>
          {/* if favourite we display touched button if not - untouched */}
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
            {/* if added we display touched button if not - untouched */}
            {showAdd ? (
              isAdded ? (
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
              )
            ) : null}
          </div>{" "}
        </>
      )}
    </div>
  );
};

export default Card;
