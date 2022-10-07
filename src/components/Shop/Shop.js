import React from "react";
import Header from "../Header/Header"
import Card from "../Card/Card"
import Footer from "../Footer/Footer"

export function Shop(props) {

    return (
        <div>
            <Header quantity={props.quantity} />
            <div className="content" >
                <h1>Наушники</h1>
                <div className="cards">

                    {props.shopData.data_Wired.map((val) => (
                        <Card onAdd={props.onAdd} onClickBuy={props.onClickBuy} item={val} />
                    ))}

                </div>
                <h1>Беспроводные наушники</h1>
                <div className="cards">

                    {props.shopData.data_Wireless.map((val) => (
                        <Card onAdd={props.onAdd} onClickBuy={props.onClickBuy} item={val} />
                    ))}

                </div>
            </div>
            <Footer />
        </div>
    );
}