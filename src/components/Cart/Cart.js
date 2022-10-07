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
                <div className={styles.cart_content}>
                    <div className={styles.cart_cards}>
                    <Cart_Card img="img/1.jpg" name="Apple BYZ S852I" price="2 927" fullPrice="2 927" />
                    </div>
                    <div className={styles.result_card}>
                        <div className={styles.finalPrice}>
                            <p>ИТОГО</p>
                            <p >₽ 2 927</p>
                        </div>
                        <button>Перейти к оформлению</button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};