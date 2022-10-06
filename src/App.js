import { Shop } from "./components/Shop/Shop";
import { Routes, Route, Link } from "react-router-dom";
import { Cart } from "./components/Cart/Cart";

function App() {
  return (
    <div className="wrapper">
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
