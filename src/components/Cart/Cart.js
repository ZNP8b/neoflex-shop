import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import styles from "./Cart.module.scss";
import Cart_Card from "./Cart_Card/Cart_Card";
import Result_Card from "./Result_Card/Result_Card";

const cart_data = [
    {img: "img/1.jpg", name:"Apple BYZ S852I", price: "2 927", fullPrice: "2 927"},
]

export function Cart() {
    return (
        <div>
            <Header />
            <div className="content">
                <h2>Корзина</h2>
                <div className={styles.cart_content}>
                    <div className={styles.cart_cards}>
                        {
                            cart_data.map((val) => (
                                <Cart_Card img={val.img} name={val.name} price={val.price} fullPrice={val.fullPrice} />
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