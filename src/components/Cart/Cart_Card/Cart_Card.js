import styles from "./Cart_Card.module.scss";

function Cart_Card() {
    return (
        <div className={styles.cart_card}>
            <div className={styles.leftSide}>
                <img width={146} height={136} src="img/1.jpg" />
                <div className={styles.quantityIcons}>
                    <img width={36} height={30} src="img/minus.svg" />
                    <p className={styles.quantity}>1</p>
                    <img width={36} height={30} src="img/plus.svg" />
                </div>
            </div>

            <div className={styles.middle}>
                <p className={styles.name}>Apple BYZ S852I</p>
                <p className={styles.price}>2 927 ₽</p>
            </div>

            <div className={styles.rightSide}>
                <img width={21} height={17} src="img/delete.svg" />
                <p className={styles.fullPrice}>2 927 ₽</p>
            </div>
        </div>
    );
}

export default Cart_Card;