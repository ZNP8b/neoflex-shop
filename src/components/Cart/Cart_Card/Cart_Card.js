import styles from "./Cart_Card.module.scss";

function Cart_Card(props) {
    return (
        <div className={styles.cart_card}>
            <div className={styles.leftSide}>
                <img width={146} height={136} src={props.item.img} />
                <div className={styles.quantityIcons}>
                    <img width={36} height={30} src="img/minus.svg" />
                    <p className={styles.quantity}>{props.item.quantity}</p>
                    <img width={36} height={30} src="img/plus.svg" />
                </div>
            </div>

            <div className={styles.middle}>
                <p className={styles.name}>{props.item.name}</p>
                <p className={styles.price}>{props.item.price} ₽</p>
            </div>

            <div className={styles.rightSide}>
                <img width={21} height={17} src="img/delete.svg" />
                <p className={styles.fullPrice}>{props.item.price * props.item.quantity} ₽</p>
            </div>
        </div>
    );
}

export default Cart_Card;