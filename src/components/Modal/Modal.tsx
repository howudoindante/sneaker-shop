import React from "react";

import styles from "./Modal.module.scss";
import Cart from "./Cart/Cart";
import EmptyCart from "./EmptyCart/EmptyCart";
import OrderReady from "./OrderReady/OrderReady";

interface ModalTypes {
  closeModal: Function;
}

const Modal: React.FC<ModalTypes> = ({ closeModal }) => {
  const [isOrderReady, setOrderReady] = React.useState(false);
  const [items, setItems] = React.useState([
    { id: 1, itemID: 1, name: "Nike Air Max", price: 14000 },
    { id: 2, itemID: 2, name: "Nike Air Max", price: 14000 },
  ]);
  React.useEffect(() => {
    console.log("Component rerendered,items is equal:", items);
  }, []);

  function MakeOrder() {
    setOrderReady(true);
    setItems((prev) => []);
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
        ) : items.length > 0 ? (
          <Cart data={[items, setItems]} onButtonClick={MakeOrder} />
        ) : (
          <EmptyCart onButtonClick={ClearCart} />
        )}
      </aside>
    </div>
  );
};

export default Modal;
