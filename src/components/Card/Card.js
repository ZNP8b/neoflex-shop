import styles from "./Card.module.scss";
console.log(styles);

function Card(props) {
    const onClickBuy = () => {
        alert(props.name + ' ' + props.rating)
    }

    return (
        <div className={styles.card} >
            <div className={styles.product} >
                <img src={props.img} className={styles.product_picture} />
            </div>
            <div className={styles.card_content}>
                <div className={styles.card_content_title}>
                    <p className={styles.name}>{props.name}</p>
                    <p className={styles.price}>{props.price} ₽</p>
                </div>
                <div className={styles.card_content_purchase}>
                    <div className={styles.card_content_rating}>
                        <img src="img/star.svg" />
                        <p>{props.rating}</p>
                    </div>
                    <a href="#" onClick={onClickBuy}>Купить</a>
                </div>
            </div>
        </div>
    );
}

export default Card;