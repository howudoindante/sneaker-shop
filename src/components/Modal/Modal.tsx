import React from "react";

import styles from "./Modal.module.scss";
import Cart from "./Cart/Cart";
import EmptyCart from "./EmptyCart/EmptyCart";
import OrderReady from "./OrderReady/OrderReady";

interface ModalTypes {
  closeModal: Function;
}
let arr = [1, 2, 3];
const Modal: React.FC<ModalTypes> = ({ closeModal }) => {
  const [isOrderReady, setOrderReady] = React.useState(false);

  function MakeOrder() {
    setOrderReady(true);
    arr = [];

    console.log(isOrderReady, arr);
  }
  function ClearCart() {
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
          <OrderReady onButtonClick={ClearCart} />
        ) : arr.length > 0 ? (
          <Cart onButtonClick={MakeOrder} />
        ) : (
          <EmptyCart onButtonClick={ClearCart} />
        )}
      </aside>
    </div>
  );
};

export default Modal;
