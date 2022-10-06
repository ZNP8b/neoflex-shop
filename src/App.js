
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
        <div className="cards">

          <div className="card" >
            <div className="product" >
              <img src="img/4.jpg" className="product_picture" />
            </div>
            <div className="card_content">
              <div className="card_content_title">
                <p className="name">Apple AirPods</p>
                <p className="price">9527 ₽</p>
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
              <img src="img/5.jpg" className="product_picture" />
            </div>
            <div className="card_content">
              <div className="card_content_title">
                <p className="name">GERLAX GH-04</p>
                <p className="price">6527 ₽</p>
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
              <img src="img/6.jpg" className="product_picture" />
            </div>
            <div className="card_content">
              <div className="card_content_title">
                <p className="name">BOROFONE BO4</p>
                <p className="price">7527 ₽</p>
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

        </div>
      </div>

      <footer>

        <div className="footerLogo" >
          <p>QPICK</p>
        </div>

        <div className="footerLinks">
          <div>
            <p>
              <a href="#">Избранное</a>
            </p>
            <p>
              <a href="#">Корзина</a>
            </p>
            <p>
              <a href="#">Контакты</a>
            </p>
          </div>

          <div className="footerLang">
            <div>
              <a href="#">Условия сервиса</a>
            </div>
            <div className="footerLang_icon">
              <img className="footerLang_icon_1st" src="img/lang.svg" />
              <div className="footerLang_icon_2nd">
                <a href="#">Рус</a>
              </div>
              <div className="footerLang_icon_3rd">
                <a href="#">Eng</a>
              </div>
            </div>
          </div>
        </div>

        <div className="footerSocial">
          <ul>
            <li>
              <img src="img/VK.svg" />
            </li>
            <li>
              <img src="img/Telegram.svg" />
            </li>
            <li>
              <img src="img/Whatsapp.svg" />
            </li>
          </ul>
        </div>

      </footer>
    </div>
  );
}

export default App;
