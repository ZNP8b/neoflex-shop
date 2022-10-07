import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import styles from "./Cart.module.scss";
import Cart_Card from "./Cart_Card/Cart_Card";
import Result_Card from "./Result_Card/Result_Card";

export function Cart() {
    return (
        <div>
            <Header />
            <div className="content">
                <h2>Корзина</h2>
                <div className={styles.cart_content}>
                    <div className={styles.cart_cards}>
                        <Cart_Card img="img/1.jpg" name="Apple BYZ S852I" price="2 927" fullPrice="2 927" />
                    </div>
                    <Result_Card fullPrice="2 927" />
                </div>
            </div>
            <Footer />
        </div>
    );
};