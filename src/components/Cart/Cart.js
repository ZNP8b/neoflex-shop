import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import styles from "./Cart.module.scss";
import Cart_Card from "./Cart_Card/Cart_Card";
import Result_Card from "./Result_Card/Result_Card";

export function Cart(props) {
    let fullPrice = 0;
    props.cartData.cart_data.forEach(el => fullPrice += Number.parseFloat(el.price * el.quantity))
    let id = 0;
    return (
        <div>
            <Header quantity={props.quantity} />
            <div className="content">
                <h2>Корзина</h2>
                <div className={styles.cart_content}>
                    <div className={styles.cart_cards}>
                        {
                            props.cartData.cart_data.map((val) => (
                                <Cart_Card changeQuantity={props.changeQuantity} onClickDelete={props.onClickDelete} deleteFromOrder={props.deleteFromOrder} item={val} id={id++} />
                            ))
                        }
                    </div>
                    {props.quantity > 0 ? <Result_Card fullPrice={fullPrice} /> : null}
                </div>
            </div>
            <Footer />
        </div>
    );
};