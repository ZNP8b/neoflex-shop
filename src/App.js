import { Shop } from "./components/Shop/Shop";
import { Routes, Route, Link } from "react-router-dom";
import { Cart } from "./components/Cart/Cart";

function App(props) {
  return (
    <div className="wrapper">
      <Routes>
        <Route path="/" element={<Shop shopData={props.data.shopPage} />} />
        <Route path="/cart" element={<Cart cartData={props.data.cartPage} />} />
      </Routes>
    </div>
  );
}

export default App;
