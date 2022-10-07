import React from "react";
import Header from "../Header/Header"
import Card from "../Card/Card"
import Footer from "../Footer/Footer"

export function Shop(props) {
const [quantity, setQuantity] = React.useState(0);

    return (
        <div>
            <Header quantity={quantity} />
            <div className="content" >
                <h1>Наушники</h1>
                <div className="cards">

                    {props.shopData.data_Wired.map((val) => (
                        <Card onAdd={props.onAdd} onClickBuy={() => setQuantity(quantity + 1)} item={val} />
                    ))}

                </div>
                <h1>Беспроводные наушники</h1>
                <div className="cards">

                    {props.shopData.data_Wireless.map((val) => (
                        <Card onAdd={props.onAdd} onClickBuy={() => setQuantity(quantity + 1)} item={val} />
                    ))}

                </div>
            </div>
            <Footer />
        </div>
    );
}