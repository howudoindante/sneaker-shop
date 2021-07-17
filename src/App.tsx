import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cart from "./components/Modal/Modal";
import Header from "./components/Header/Header";
import Store from "./pages/Store/Store";
import Favourites from "./pages/Favourites/Favourites";
import Orders from "./pages/Orders/Orders";
import React from "react";

import {
  getCartItems,
  getFavouriteItems,
  getOrders,
  getStoreItems,
} from "./apiquery";

import { useDispatch } from "react-redux";
function App() {
  const dispatch = useDispatch();
  const [isModalOpen, setModalOpen] = React.useState(false);
  React.useEffect(() => {
    isModalOpen
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflowY = "scroll");
  }, [isModalOpen]);
  React.useEffect(() => {
    getStoreItems(dispatch);
    getCartItems(dispatch);
    getFavouriteItems(dispatch);
    getOrders(dispatch);
  }, []);

  return (
    <Router>
      <div className={`wrapper clear ${isModalOpen ? "stopScrolling" : ""}`}>
        <Header openModal={setModalOpen} />
        <main>
          <Switch>
            <Route path="/" exact component={Store} />
            <Route path="/favourite" exact component={Favourites} />
            <Route path="/orders" exact component={Orders} />
          </Switch>
        </main>
        {isModalOpen ? <Cart closeModal={setModalOpen} /> : null}
      </div>
    </Router>
  );
}

export default App;
