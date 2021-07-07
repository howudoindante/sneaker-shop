import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cart from "./components/Modal/Modal";
import Header from "./components/Header/Header";
import Store from "./pages/Store/Store";
import Favourites from "./pages/Favourites/Favourites";
import Orders from "./pages/Orders/Orders";
import React from "react";

function App() {
  const [isModalOpen, setModalOpen] = React.useState(false);
  React.useEffect(() => {
    isModalOpen
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflowY = "scroll");
  }, [isModalOpen]);
  return (
    <Router>
      <div className={`wrapper clear ${isModalOpen ? "stopScrolling" : ""}`}>
        <Header openModal={setModalOpen} />
        <main>
          {isModalOpen ? <Cart closeModal={setModalOpen} /> : null}
          <Switch>
            <Route path="/" exact component={Store} />
            <Route path="/favourite" exact component={Favourites} />
            <Route path="/orders" exact component={Orders} />
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
