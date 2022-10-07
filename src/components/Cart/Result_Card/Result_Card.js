import styles from "./Result_Card.module.scss";

function Result_Card() {
    return (
        <div className={styles.result_card}>
            <div className={styles.finalPrice}>
                <p>ИТОГО</p>
                <p >₽ 2 927</p>
            </div>
            <button>Перейти к оформлению</button>
        </div>
    );
}

export default Result_Card;