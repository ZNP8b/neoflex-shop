import Header from "../Header/Header"
import Card from "../Card/Card"
import Footer from "../Footer/Footer"

const data_Wired = [
    { img: "img/1.jpg", name: "Apple BYZ S852I", price: "2927", rating: "4.7" },
    { img: "img/2.jpg", name: "Apple EarPods", price: "2327", rating: "4.5" },
    { img: "img/3.jpg", name: "Apple EarPods", price: "2327", rating: "4.5" },
    { img: "img/1.jpg", name: "Apple BYZ S852I", price: "2927", rating: "4.7" },
    { img: "img/2.jpg", name: "Apple EarPods", price: "2327", rating: "4.5" },
    { img: "img/3.jpg", name: "Apple EarPods", price: "2327", rating: "4.5" }
];

const data_Wireless = [
    { img: "img/4.jpg", name: "Apple AirPods", price: "9527", rating: "4.7" },
    { img: "img/5.jpg", name: "GERLAX GH-04", price: "6527", rating: "4.7" },
    { img: "img/6.jpg", name: "BOROFONE BO4", price: "7527", rating: "4.7" },
];

export function Shop() {
    return (
        <div>
            <Header />
            <div className="content" >
                <h1>Наушники</h1>
                <div className="cards">

                    {data_Wired.map((val) => (
                        <Card img={val.img} name={val.name} price={val.price} rating={val.rating} />
                    ))}

                </div>
                <h1>Беспроводные наушники</h1>
                <div className="cards">

                    {data_Wireless.map((val) => (
                        <Card img={val.img} name={val.name} price={val.price} rating={val.rating} />
                    ))}

                </div>
            </div>
            <Footer />
        </div>
    );
}