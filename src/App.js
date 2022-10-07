import { Shop } from "./components/Shop/Shop";
import { Routes, Route, Link } from "react-router-dom";
import { Cart } from "./components/Cart/Cart";

function App(props) {
  const addToOrder = (item) => {
    props.data.cartPage.cart_data = JSON.parse(sessionStorage.getItem("order_items")) || [];
    props.data.cartPage.cart_data.push(item);
    sessionStorage.setItem("order_items", JSON.stringify(props.data.cartPage.cart_data));
  }

  return (
    <div className="wrapper">
      <Routes>
        <Route path="/" element={<Shop onAdd={addToOrder} shopData={props.data.shopPage} />} />
        <Route path="/cart" element={<Cart cartData={props.data.cartPage} />} />
      </Routes>
    </div>
  );
}

export default App;
