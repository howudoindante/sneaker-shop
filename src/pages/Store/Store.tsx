import axios from "axios";
import React from "react";
import Card from "../../components/Card/Card";
import styles from "./Store.module.scss";
import { ItemType } from "../../types/types";
import { useSelector, useDispatch } from "react-redux";
import { TActionStore } from "../../redux/reducers/storeItems";
const Store = () => {
  // const [items, setItems] = React.useState([]);
  const { items, isLoading } = useSelector((state: any) => state.storeItems);
  const dispatch = useDispatch();
  React.useEffect(() => {
    axios.get("http://localhost:3000/items").then((response) => {
      dispatch({ type: TActionStore.INIT });
      dispatch({ type: TActionStore.LOADING });

      // setTimeout(() => {
      dispatch({ type: TActionStore.FILLSTORE, payload: response.data });
      dispatch({ type: TActionStore.LOADING_FINISH });
      // }, 4000);
    });
  }, []);

  return (
    <div className={`${styles.storeContent}`}>
      <h1>Все кроссовки</h1>
      <div className={`${styles.cards} d-flex flex-wrap`}>
        {items.length > 0 && !isLoading
          ? items?.map((item: ItemType) => <Card key={item.id} item={item} />)
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
