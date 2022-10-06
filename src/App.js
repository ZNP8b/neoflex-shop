
function App() {
  return (
    <div className="wrapper">
      <header>
        <div className="headerLeft">
          <p>QPICK</p>
        </div>
        <ul className="headerRight">
          <li>
            <img width={22} height={20} src="img/fav.svg" />
          </li>
          <li>
            <img width={22} height={20} src="img/cart.svg" />
          </li>
        </ul>
      </header>

      <div className="content" >
        <h1>Наушники</h1>

        <div className="cards">
          <div className="card" >
            <div className="product" >
              <img src="img/1.jpg" className="product_picture" />
            </div>
            <div className="card_content">
              <div className="card_content_title">
                <p className="name">Apple BYZ S852I</p>
                <p className="price">2927 ₽</p>
              </div>
              <div className="card_content_purchase">
                <div className="card_content_rating">
                  <img src="img/star.svg" />
                  <p>4.7</p>
                </div>
                <a href="#">Купить</a>
              </div>
            </div>
          </div>

          <div className="card" >
            <div className="product" >
              <img src="img/2.jpg" className="product_picture" />
            </div>
            <div className="card_content">
              <div className="card_content_title">
                <p className="name">Apple EarPods</p>
                <p className="price">2327 ₽</p>
              </div>
              <div className="card_content_purchase">
                <div className="card_content_rating">
                  <img src="img/star.svg" />
                  <p>4.5</p>
                </div>
                <a href="#">Купить</a>
              </div>
            </div>
          </div>

          <div className="card" >
            <div className="product" >
              <img src="img/3.jpg" className="product_picture" />
            </div>
            <div className="card_content">
              <div className="card_content_title">
                <p className="name">Apple EarPods</p>
                <p className="price">2327 ₽</p>
              </div>
              <div className="card_content_purchase">
                <div className="card_content_rating">
                  <img src="img/star.svg" />
                  <p>4.5</p>
                </div>
                <a href="#">Купить</a>
              </div>
            </div>
          </div>

        </div>

        <h1>Беспроводные наушники</h1>
        ....
      </div>

      <footer>....</footer>
    </div>
  );
}

export default App;
