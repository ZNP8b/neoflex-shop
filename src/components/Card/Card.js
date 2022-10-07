import styles from "./Card.module.scss";

function Card(props) {

    return (
        <div className={styles.card} >
            <div className={styles.product} >
                <img src={props.item.img} className={styles.product_picture} />
            </div>
            <div className={styles.card_content}>
                <div className={styles.card_content_title}>
                    <p className={styles.name}>{props.item.name}</p>
                    <p className={styles.price}>{props.item.price} ₽</p>
                </div>
                <div className={styles.card_content_purchase}>
                    <div className={styles.card_content_rating}>
                        <img src="img/star.svg" />
                        <p>{props.item.rating}</p>
                    </div>
                    <a onClick={() => (
                        props.onClickBuy(),
                        props.onAdd(props.item)
                    )}>Купить</a>
                </div>
            </div>
        </div>
    );
}

export default Card;