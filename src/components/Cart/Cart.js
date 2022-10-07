import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import styles from "./Cart.module.scss";
import Cart_Card from "./Cart_Card/Cart_Card";
import Result_Card from "./Result_Card/Result_Card";

export function Cart(props) {
    return (
        <div>
            <Header quantity={props.quantity} />
            <div className="content">
                <h2>Корзина</h2>
                <div className={styles.cart_content}>
                    <div className={styles.cart_cards}>
                        {
                            props.cartData.cart_data.map((val) => (
                                <Cart_Card item={val} />
                            ))
                        }
                    </div>
                    <Result_Card fullPrice="2 927" />
                </div>
            </div>
            <Footer />
        </div>
    );
};