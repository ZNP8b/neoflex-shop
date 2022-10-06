
function Card(props) {
    return (
        <div className="card" >
            <div className="product" >
                <img src={props.img} className="product_picture" />
            </div>
            <div className="card_content">
                <div className="card_content_title">
                    <p className="name">{props.name}</p>
                    <p className="price">{props.price} ₽</p>
                </div>
                <div className="card_content_purchase">
                    <div className="card_content_rating">
                        <img src="img/star.svg" />
                        <p>{props.rating}</p>
                    </div>
                    <a href="#">Купить</a>
                </div>
            </div>
        </div>
    );
}

export default Card;