import styles from "./Result_Card.module.scss";

function Result_Card(props) {
    return (
        <div className={styles.result_card}>
            <div className={styles.finalPrice}>
                <p>ИТОГО</p>
                <p >₽ {props.fullPrice}</p>
            </div>
            <button>Перейти к оформлению</button>
        </div>
    );
}

export default Result_Card;