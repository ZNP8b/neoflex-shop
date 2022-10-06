import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import styles from "./Cart.module.scss";
import Cart_Card from "./Cart_Card/Cart_Card";

export function Cart() {
    return (
        <div>
            <Header />
            <div className="content">
                <h2>Корзина</h2>
                <Cart_Card />
            </div>
            <Footer />
        </div>
    );
};