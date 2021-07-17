import React from "react";
import axios from "axios";
import styles from "./Modal.module.scss";
import Cart from "./Cart/Cart";
import EmptyCart from "./EmptyCart/EmptyCart";
import OrderReady from "./OrderReady/OrderReady";
import { useSelector, useDispatch } from "react-redux";
import { TType as CartTType } from "../../redux/reducers/cartItems";
interface ModalTypes {
  closeModal: Function;
}

const Modal: React.FC<ModalTypes> = ({ closeModal }) => {
  const [isOrderReady, setOrderReady] = React.useState(false);
  const [orderNumber, setOrderNumber] = React.useState(0);
  const dispatch = useDispatch();
  const { items, total } = useSelector((state: any) => state.cartItems);
  const address = "Ул. Кошкина д.4 кв.5";
  function MakeOrder() {
    dispatch({
      type: CartTType.LOADING,
    });
    axios
      .post(`https://60f00e68f587af00179d3d0d.mockapi.io/orders/`, {
        address,
        items,
        total,
      })
      .then(async (response) => {
        function delay() {
          return new Promise((resolve) => setTimeout(resolve, 1000));
        }

        async function delayedAxios(element: any) {
          await delay();
          await axios
            .delete(
              `https://60f00e68f587af00179d3d0d.mockapi.io/cart/${element.id}`
            )
            .catch((e) => {
              alert("Не удалось удалить товар,попробуйте снова");
            });
        }
        for (const item of items) {
          await delayedAxios(item);
        }
        await dispatch({
          type: CartTType.CLEAR_CART,
        });

        await dispatch({
          type: CartTType.UPDATE_TOTAL,
        });

        await dispatch({
          type: CartTType.LOADING_FINISH,
        });
        await setOrderNumber(response.data.id);
        await setOrderReady(true);
      })
      .catch((e) => {
        alert("Не удалось удалить товар,попробуйте снова");
      });
  }
  function BackToStore() {
    closeModal((prev: boolean) => !prev);
    setOrderReady(false);
  }
  return (
    <div className={`${styles.modalWrapper}`}>
      <aside>
        <img
          className={`${styles.button}`}
          src="/img/closeBig.svg"
          width={30}
          height={30}
          alt="close"
          onClick={() => closeModal((prev: boolean) => !prev)}
        />
        {isOrderReady ? (
          <OrderReady orderNumber={orderNumber} onButtonClick={BackToStore} />
        ) : items.length > 0 ? (
          <Cart total={total} data={[items]} onButtonClick={MakeOrder} />
        ) : (
          <EmptyCart onButtonClick={BackToStore} />
        )}
      </aside>
    </div>
  );
};

export default Modal;
